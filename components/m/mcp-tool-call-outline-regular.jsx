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
		"content": `<style>.f6ppytj7e {
  d: path("M12 10h3a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3v-3l3 -3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oong2tffv {
  d: path("M12 5v5");
}

.u98_rdemn {
  d: path("m12.5 13 2 2 -2 2");
}

.uormpdb9p {
  d: path("M9 5v5");
}

.v7ievg3-e {
  d: path("M9.5 15h5");
}

.yrwh_6bgk {
  d: path("M15 5v5");
}
</style><g class="nrj6p8qat"><path class="f6ppytj7e"/><path class="uormpdb9p"/><path class="oong2tffv"/><path class="yrwh_6bgk"/><path class="v7ievg3-e"/><path class="u98_rdemn"/></g>`,
		"fallback": "iconmind:mcp-tool-call-outline-regular",
	});
}

export default Component;
