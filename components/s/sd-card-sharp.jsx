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
		"content": `<style>.esxn0upma {
  fill: currentColor;
  d: path("M5 21V8.423L10.423 3H19v18zm4.577-10.23h1V7.345h-1zm2.808 0h1V7.345h-1zm2.807 0h1V7.345h-1z");
}
</style><path class="esxn0upma"/>`,
		"fallback": "material-symbols-light:sd-card-sharp",
	});
}

export default Component;
