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
		"content": `<style>.fgsu10bod {
  d: path("M7 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.h9dt6-bol {
  d: path("M15 10v2.5");
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

.mzw38bcyd {
  d: path("M11 10h5.5");
}

.ni20md-jo {
  d: path("M13.5 3H17a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V6l3 -3h3.5");
}

.uesvxd39h {
  d: path("M15 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="ni20md-jo"/><path class="j6o0shbiv"/><path class="uesvxd39h"/><path class="fgsu10bod"/><path class="mzw38bcyd"/><path class="h9dt6-bol"/></g>`,
		"fallback": "iconmind:mcp-oauth-outline-thin",
	});
}

export default Component;
