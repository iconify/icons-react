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
		"content": `<style>.jk_x74hud {
  fill: currentColor;
  d: path("M6.923 15.308L11.346 4h1.289l4.423 11.308zM5 20l.827-2.308h12.346L19 20z");
}
</style><path class="jk_x74hud"/>`,
		"fallback": "material-symbols-light:stylus-pencil-sharp",
	});
}

export default Component;
