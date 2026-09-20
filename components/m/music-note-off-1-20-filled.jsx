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
		"content": `<style>.ghqn-6obt {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708L9.5 10.207v2.198a3.25 3.25 0 1 0 .995 2.165l.005-.07v-3.293l6.646 6.647a.5.5 0 0 0 .708-.708zM10.5 7.177v1.202l-1-1V2.5a.5.5 0 0 1 .647-.478l5.088 1.566A2.5 2.5 0 0 1 17 5.978V8.5a.5.5 0 0 1-.647.478z");
}
</style><path class="ghqn-6obt"/>`,
		"fallback": "fluent:music-note-off-1-20-filled",
	});
}

export default Component;
