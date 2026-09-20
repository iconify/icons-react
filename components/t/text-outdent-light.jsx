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
		"content": `<style>.bczonxbve {
  fill: currentColor;
  d: path("M222 128a6 6 0 0 1-6 6H112a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6M112 70h104a6 6 0 0 0 0-12H112a6 6 0 0 0 0 12m104 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M72 142a6 6 0 0 0 4.24-10.24L40.49 96l35.75-35.76a6 6 0 0 0-8.48-8.48l-40 40a6 6 0 0 0 0 8.48l40 40A6 6 0 0 0 72 142");
}
</style><path class="bczonxbve"/>`,
		"fallback": "ph:text-outdent-light",
	});
}

export default Component;
