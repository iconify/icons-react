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
		"content": `<style>.nw2rdv9fo {
  fill: currentColor;
  d: path("M10 17.48L4.52 12L10 6.52zm-.885-2.124V8.644L5.76 12zM14 17.48V6.519L19.48 12z");
}
</style><path class="nw2rdv9fo"/>`,
		"fallback": "material-symbols-light:switch-left-outline",
	});
}

export default Component;
