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
		"content": `<style>.w708oqbxw {
  fill: currentColor;
  d: path("M22 21a1 1 0 0 1-1 1h-6v-4a3 3 0 1 0-6 0v4H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 .445-.832L5 10.465V7.618l-.553.276a1 1 0 1 1-.894-1.788l8-4a1 1 0 0 1 .894 0l8 4a1 1 0 1 1-.894 1.788L19 7.618v2.847l2.555 1.703A1 1 0 0 1 22 13ZM9.236 8.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335");
}
</style><path class="w708oqbxw"/>`,
		"fallback": "coolicons:school-fill-sharp",
	});
}

export default Component;
