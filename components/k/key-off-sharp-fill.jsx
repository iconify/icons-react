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
		"content": `<style>.ahv5ybc6l {
  d: path("M10 12L12 12M16.6569 12L17.6569 12L23 12M21 12L21 15.3431L21 16.3431M1.7071 1.7071L22.2929 22.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x576uibol {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.8723 10.8723C10.9559 11.2347 11 11.6122 11 12C11 14.7614 8.7614 17 6 17C3.2386 17 1 14.7614 1 12C1 9.2386 3.2386 7 6 7C6.3878 7 6.7653 7.0441 7.1277 7.1277Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="x576uibol"/><path class="ahv5ybc6l"/></g>`,
		"fallback": "keyline-icons:key-off-sharp-fill",
	});
}

export default Component;
