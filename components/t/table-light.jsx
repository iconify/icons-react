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
		"content": `<style>.iex-w-_dv {
  fill: currentColor;
  d: path("M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6M38 110h44v36H38Zm56 0h124v36H94Zm124-48v36H38V62ZM38 192v-34h44v36H40a2 2 0 0 1-2-2m178 2H94v-36h124v34a2 2 0 0 1-2 2");
}
</style><path class="iex-w-_dv"/>`,
		"fallback": "ph:table-light",
	});
}

export default Component;
