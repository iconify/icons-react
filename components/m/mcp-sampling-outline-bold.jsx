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
		"content": `<style>.f8wgtkpny {
  d: path("m11 8 -3 3 3 3");
}

.j6o0shbiv {
  d: path("M7 18h5");
}

.ni20md-jo {
  d: path("M13.5 3H17a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V6l3 -3h3.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uesvxd39h {
  d: path("M15 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zawirs49s {
  d: path("M8 11h6");
}
</style><g class="s0phu2bbs"><path class="ni20md-jo"/><path class="j6o0shbiv"/><path class="uesvxd39h"/><path class="zawirs49s"/><path class="f8wgtkpny"/></g>`,
		"fallback": "iconmind:mcp-sampling-outline-bold",
	});
}

export default Component;
