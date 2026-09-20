import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":214};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j371nvhhn {
  d: path("M256 106.654v53.308l-85.333 53.32v-53.32zm-85.333 0v53.308l-85.334 53.32v-53.32zm-85.334 0v53.308L0 213.282v-53.32zM256 0v53.32l-85.333 53.321v-53.32zm-85.333 0v53.32l-85.334 53.321v-53.32zM85.333 0v53.32L0 106.642v-53.32z");
}
</style><path class="j371nvhhn"/>`,
		"fallback": "logos:mparticle-icon",
	});
}

export default Component;
