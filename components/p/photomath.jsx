import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mrcpzhyuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-miterlimit: 4.72;
  d: path("m17.017 14.303l13.107 19.271m-13.107 0l13.107-19.271m4.514 5.734h9.307m-9.307 7.653h9.307");
}

.y9gj-nrrp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.087 33.828v7.586A2.08 2.08 0 0 1 35 43.5H12.143a2.08 2.08 0 0 1-2.088-2.086V6.586A2.08 2.08 0 0 1 12.143 4.5h22.856a2.08 2.08 0 0 1 2.088 2.086v7.774");
}
</style><path class="y9gj-nrrp"/><path class="mrcpzhyuz"/>`,
		"fallback": "arcticons:photomath",
	});
}

export default Component;
