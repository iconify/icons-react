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
		"content": `<style>.kklm6bb6k {
  fill: currentColor;
  d: path("M13.5 19.77v-7.312l-5.788-5.77V9.67h-1V5h4.669v1H8.4l6.1 6.08v7.69z");
}
</style><path class="kklm6bb6k"/>`,
		"fallback": "material-symbols-light:turn-slight-left-sharp",
	});
}

export default Component;
