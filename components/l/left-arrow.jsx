import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ce44osb2z {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("m22.95 64l42.46-31.14v19.42h39.64v23.23H65.41v19.61z");
}
</style><path class="ce44osb2z"/>`,
		"fallback": "noto-v1:left-arrow",
	});
}

export default Component;
