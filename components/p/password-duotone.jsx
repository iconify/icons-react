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
		"content": `<style>.n4lt2ta4p {
  d: path("M4 7V12M2 11L6 8M2 8L6 11M12 7V12M10 11L14 8M10 8L14 11M20 7V12M18 11L22 8M18 8L22 11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yer-e4b7i {
  stroke-opacity: 0.4;
  d: path("M2 17H22");
}
</style><g class="nrj6p8qat"><path class="n4lt2ta4p"/><path class="yer-e4b7i"/></g>`,
		"fallback": "keyline-icons:password-duotone",
	});
}

export default Component;
