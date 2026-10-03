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
		"content": `<style>.mocbjxbyz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 6C2 3.7909 3.7909 2 6 2L16.1716 2C16.9672 2 17.7303 2.3161 18.2929 2.8787L21.1213 5.7071C21.6839 6.2697 22 7.0328 22 7.8284L22 18C22 20.2091 20.2091 22 18 22L6 22C3.7909 22 2 20.2091 2 18L2 6ZM7 5L7 6C7 6.5523 7.4477 7 8 7L12 7C12.5523 7 13 6.5523 13 6L13 5C13 4.4477 12.5523 4 12 4L8 4C7.4477 4 7 4.4477 7 5ZM9 13C8.4477 13 8 13.4477 8 14C8 14.5523 8.4477 15 9 15L15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13L9 13Z");
}
</style><path clip-rule="evenodd" class="mocbjxbyz"/>`,
		"fallback": "keyline-icons:save-minus-fill",
	});
}

export default Component;
