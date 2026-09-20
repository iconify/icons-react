import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ldwngebjg {
  fill: currentColor;
  d: path("M12.588 6.086q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22m4.604-2.472v2.127q.31-.002.52.241t.211.55v1.28q0 .306-.21.55q-.211.243-.52.24v7.782q0 .666-.475 1.14T15.577 18H8.423q-.666 0-1.14-.475t-.475-1.14V3.615q0-.666.474-1.14T8.423 2h7.154q.666 0 1.14.475t.475 1.14M8.5 21.52v-1h7v1z");
}
</style><path class="ldwngebjg"/>`,
		"fallback": "material-symbols-light:mobile-dock",
	});
}

export default Component;
