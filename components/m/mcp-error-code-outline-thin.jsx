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
		"content": `<style>.gco2r_19v {
  d: path("m10 11 4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j6o0shbiv {
  d: path("M7 18h5");
}

.ni20md-jo {
  d: path("M13.5 3H17a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V6l3 -3h3.5");
}

.pljtrccyg {
  d: path("m14 11 -4 4");
}

.qr1iqpomq {
  d: path("M9 8h6");
}

.uesvxd39h {
  d: path("M15 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="ni20md-jo"/><path class="j6o0shbiv"/><path class="uesvxd39h"/><path class="qr1iqpomq"/><path class="gco2r_19v"/><path class="pljtrccyg"/></g>`,
		"fallback": "iconmind:mcp-error-code-outline-thin",
	});
}

export default Component;
