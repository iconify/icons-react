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
		"content": `<style>.dbygz5bmw {
  fill: currentColor;
  d: path("M7.675 16L5.5 7L12 1l6.5 6l-2.175 9zm1.575-2h5.5l1.525-6.325L13 4.65V7.3q.35.25.55.625t.2.825q0 .725-.513 1.238T12 10.5t-1.237-.513t-.513-1.237q0-.45.2-.825T11 7.3V4.65L7.725 7.675zM4 21l1-3h14l1 3z");
}
</style><path class="dbygz5bmw"/>`,
		"fallback": "material-symbols:stylus-fountain-pen-outline-sharp",
	});
}

export default Component;
