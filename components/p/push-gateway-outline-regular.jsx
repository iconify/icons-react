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
		"content": `<style>.juej44_6j {
  d: path("M9.5 7.5 12 10l2.5 -2.5");
}

.lh_8lcb-x {
  d: path("M12 4v6");
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="n0n63pb2v"/><path class="lh_8lcb-x"/><path class="juej44_6j"/></g>`,
		"fallback": "iconmind:push-gateway-outline-regular",
	});
}

export default Component;
