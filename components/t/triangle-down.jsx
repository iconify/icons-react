import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b3ha5ccdy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 12.998L14.037 6H5.963zm-.866 2.5a1 1 0 0 0 1.732 0L16.635 5.5a1 1 0 0 0-.866-1.5H4.23a1 1 0 0 0-.866 1.5z");
}
</style><path clip-rule="evenodd" class="b3ha5ccdy"/>`,
		"fallback": "pepicons-pop:triangle-down",
	});
}

export default Component;
