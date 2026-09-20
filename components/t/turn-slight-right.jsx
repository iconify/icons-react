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
		"content": `<style>.xpmdc32de {
  fill: currentColor;
  d: path("M9.5 19.77v-7.018q0-.323.13-.628t.349-.522L15.6 6h-2.98V5h4.669v4.67h-1V6.688l-5.616 5.596q-.096.096-.134.202t-.039.22v7.062z");
}
</style><path class="xpmdc32de"/>`,
		"fallback": "material-symbols-light:turn-slight-right",
	});
}

export default Component;
