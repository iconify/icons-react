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
		"content": `<style>.jixoakntt {
  fill: currentColor;
  d: path("M5.923 15.616V5.923h11.693v9.693zM3 19v-1h17V5h1v14z");
}
</style><path class="jixoakntt"/>`,
		"fallback": "material-symbols-light:picture-in-picture-large-sharp",
	});
}

export default Component;
