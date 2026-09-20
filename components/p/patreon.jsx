import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":247};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gu0kgm4to {
  fill: var(--svg-color--ff424d, #ff424d);
  d: path("M45.136 0v246.35H0V0zm118.521 0C214.657 0 256 41.343 256 92.343s-41.343 92.343-92.343 92.343s-92.343-41.344-92.343-92.343S112.658 0 163.657 0");
}
</style><path class="gu0kgm4to"/>`,
		"fallback": "logos:patreon",
	});
}

export default Component;
