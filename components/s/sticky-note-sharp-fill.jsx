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
		"content": `<style>.aoyl7fb3r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2L15 2C15.2652 2 15.5196 2.1054 15.7071 2.2929L21.7071 8.2929C21.8946 8.4804 22 8.7348 22 9L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM15 9L19.5858 9L15 4.4142Z");
}
</style><path clip-rule="evenodd" class="aoyl7fb3r"/>`,
		"fallback": "keyline-icons:sticky-note-sharp-fill",
	});
}

export default Component;
