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
		"content": `<style>.psbuso74f {
  fill: currentColor;
  d: path("M11.27 20.38L14.458 14H6.253a2.25 2.25 0 0 0-2.25 2.249v.92c0 .572.18 1.13.511 1.596c1.396 1.958 3.595 3.023 6.536 3.207a2.47 2.47 0 0 1 .22-1.591M12 2.006a5 5 0 1 1 0 10a5 5 0 0 1 0-10m4.161 10.825l-3.997 7.998A1.5 1.5 0 0 0 13.507 23h7.994a1.5 1.5 0 0 0 1.343-2.172l-3.997-7.998c-.553-1.107-2.133-1.107-2.686 0m1.843 2.666v3.001a.5.5 0 0 1-1 0v-3.001a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1.001a.5.5 0 0 1 0 1");
}
</style><path class="psbuso74f"/>`,
		"fallback": "fluent:person-warning-24-filled",
	});
}

export default Component;
