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
		"content": `<style>.bpdfs5b6a {
  d: path("m9 15 2 2 4 -4");
}

.f6ppytj7e {
  d: path("M12 10h3a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3v-3l3 -3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oong2tffv {
  d: path("M12 5v5");
}

.uormpdb9p {
  d: path("M9 5v5");
}

.y3jqaeb9y {
  fill: currentColor;
  d: path("M12 10h3a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3v-3l3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yrwh_6bgk {
  d: path("M15 5v5");
}
</style><g class="hntgybcog"><path class="y3jqaeb9y"/><path class="f6ppytj7e"/><path class="uormpdb9p"/><path class="oong2tffv"/><path class="yrwh_6bgk"/><path class="bpdfs5b6a"/></g>`,
		"fallback": "iconmind:mcp-tool-result-duotone-thin",
	});
}

export default Component;
