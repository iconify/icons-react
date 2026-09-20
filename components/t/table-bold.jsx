import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pv9a0tbfu {
  fill: currentColor;
  d: path("M224 44H32a12 12 0 0 0-12 12v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12M44 116h32v24H44Zm56 0h112v24H100Zm112-48v24H44V68ZM44 164h32v24H44Zm56 24v-24h112v24Z");
}
</style><path class="pv9a0tbfu"/>`,
		"fallback": "ph:table-bold",
	});
}

export default Component;
