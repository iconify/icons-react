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
		"content": `<style>.hbuw0obat {
  d: path("M17 3v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ojq3d2bwe {
  d: path("M5 3v18");
}

.r7pmyrb1c {
  d: path("M14 15h5");
}

.v28q9db1j {
  d: path("M11 3v18");
}

.vcbx2ik3k {
  d: path("m17 12 3 3 -3 3");
}
</style><g class="nrj6p8qat"><path class="ojq3d2bwe"/><path class="v28q9db1j"/><path class="hbuw0obat"/><path class="r7pmyrb1c"/><path class="vcbx2ik3k"/></g>`,
		"fallback": "iconmind:jailbreak-outline-regular",
	});
}

export default Component;
