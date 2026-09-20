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
		"content": `<style>.p8mthqbzg {
  fill: currentColor;
  d: path("M9 17.192V6.808L17.154 12z");
}
</style><path class="p8mthqbzg"/>`,
		"fallback": "material-symbols-light:play-arrow-sharp",
	});
}

export default Component;
