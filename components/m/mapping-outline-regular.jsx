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
		"content": `<style>.a04thmuhx {
  d: path("M8 12h7");
}

.n8h0kccut {
  d: path("M4 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o3p-ebloq {
  d: path("M8 18h10");
}

.wl2374scp {
  d: path("M8 6h10");
}

.xzn4jmbzj {
  d: path("M4 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.yw0xzbbmi {
  d: path("M4 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="xzn4jmbzj"/><path class="yw0xzbbmi"/><path class="n8h0kccut"/><path class="wl2374scp"/><path class="a04thmuhx"/><path class="o3p-ebloq"/></g>`,
		"fallback": "iconmind:mapping-outline-regular",
	});
}

export default Component;
