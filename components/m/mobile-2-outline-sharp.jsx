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
		"content": `<style>.l6c28kb5u {
  fill: currentColor;
  d: path("M12.588 19.01q.22-.222.22-.55t-.222-.547t-.549-.22t-.548.22q-.22.223-.22.55t.222.548q.221.22.549.22t.548-.222M6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm0 0V3z");
}
</style><path class="l6c28kb5u"/>`,
		"fallback": "material-symbols-light:mobile-2-outline-sharp",
	});
}

export default Component;
