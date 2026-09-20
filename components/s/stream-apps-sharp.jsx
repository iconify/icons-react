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
		"content": `<style>.z05vgab-j {
  fill: currentColor;
  d: path("M14.116 16.173v-7.48h7.653v6h-6.173zM6 22V2h12v4.923h-1V5.5H7v13h10v-1.423h1V22z");
}
</style><path class="z05vgab-j"/>`,
		"fallback": "material-symbols-light:stream-apps-sharp",
	});
}

export default Component;
