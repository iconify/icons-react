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
		"content": `<style>.dp76i8win {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19M3 11l1.5 7.5h3L9 11l1.5 7.5h3L15 11l1.5 7.5h3L21 11M6 11V8L4.5 5.5M6 8l1.5-2.5M12 11V8l-1.5-2.5M12 8l1.5-2.5M18 11V8l-1.5-2.5M18 8l1.5-2.5");
}
</style><path class="dp76i8win"/>`,
		"fallback": "uix-sharp:seed-tray-cells",
	});
}

export default Component;
