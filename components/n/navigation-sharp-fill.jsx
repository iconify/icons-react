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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ldxubll4d {
  fill: currentColor;
  d: path("M5.0584 18.2211L11.5195 5.297C11.7175 4.901 12.2825 4.901 12.4805 5.297L18.9416 18.2211C19.1557 18.6493 18.7453 19.1225 18.2912 18.9712L12.1699 16.9304C12.0596 16.8937 11.9404 16.8937 11.8301 16.9304L5.7088 18.9712C5.2547 19.1225 4.8443 18.6493 5.0584 18.2211Z");
  stroke: none;
}

.vf8rlvbfx {
  d: path("M5 19L12 5L19 19L12 16.8739L5 19Z");
}
</style><g class="gp_8x1bzb"><path class="ldxubll4d"/><path class="vf8rlvbfx"/></g>`,
		"fallback": "keyline-icons:navigation-sharp-fill",
	});
}

export default Component;
