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
		"content": `<style>.omt-n94-f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M23 7V17C23 19.2091 21.2091 21 19 21H5C2.79086 21 1 19.2091 1 17V7C1 4.79086 2.79086 3 5 3H19C21.2091 3 23 4.79086 23 7ZM13.5 8.5C13.5 7.6716 12.8284 7 12 7C11.1716 7 10.5 7.6716 10.5 8.5C10.5 9.3284 11.1716 10 12 10C12.8284 10 13.5 9.3284 13.5 8.5Z");
}
</style><path clip-rule="evenodd" class="omt-n94-f"/>`,
		"fallback": "keyline-icons:tablet-fill",
	});
}

export default Component;
