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
		"content": `<style>.fdbp_p5yp {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h9v-8h7z");
}

.im-o75nsy {
  fill: currentColor;
  d: path("M22.5 16h-2.2l1.7-4h-5v6h2v5z");
}
</style><path class="fdbp_p5yp"/><path class="im-o75nsy"/>`,
		"fallback": "ic:sharp-quickreply",
	});
}

export default Component;
