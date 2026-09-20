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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qmonhebui {
  d: path("M3 4h6c0 -1.5 4 -1.5 4 0v6H3Z");
}

.wmlzbnb0j {
  fill: currentColor;
  d: path("M3 4h6c0 -1.5 4 -1.5 4 0v6H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zlfbc7lss {
  fill: currentColor;
  d: path("M11 13h10v6c0 1.5 -4 1.5 -4 0h-6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zmangp7gz {
  d: path("M11 13h10v6c0 1.5 -4 1.5 -4 0h-6Z");
}
</style><g class="nrj6p8qat"><path class="wmlzbnb0j"/><path class="zlfbc7lss"/><path class="qmonhebui"/><path class="zmangp7gz"/></g>`,
		"fallback": "iconmind:puzzle-hobby-duotone-regular",
	});
}

export default Component;
