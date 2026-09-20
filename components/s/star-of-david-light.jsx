import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zmdeb5bec {
  fill: currentColor;
  d: path("m198.91 128l30.3-53a6 6 0 0 0-5.21-9h-60.51l-30.28-53a6 6 0 0 0-10.42 0L92.5 66H32a6 6 0 0 0-5.21 9l30.28 53l-30.28 53a6 6 0 0 0 5.21 9h60.5l30.29 53a6 6 0 0 0 10.42 0l30.28-53H224a6 6 0 0 0 5.21-9Zm14.75-50L192 115.91L170.34 78Zm-28.57 50l-28.56 50H99.46L70.9 128l28.56-50h57.07ZM128 28.09L149.67 66h-43.35ZM42.34 78h43.3L64 115.91Zm0 99.92L64 140.09L85.64 178ZM128 227.91L106.32 190h43.35ZM170.34 178L192 140.09L213.66 178Z");
}
</style><path class="zmdeb5bec"/>`,
		"fallback": "ph:star-of-david-light",
	});
}

export default Component;
