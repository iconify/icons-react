import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yc5jp-bmg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.236 4.438v38.976m5.864.024H23.822m3.504-25.643l-7.774-3.219l-7.774-3.218l7.776-3.33L27.33 4.7l-.002 6.548z");
}
</style><path class="yc5jp-bmg"/>`,
		"fallback": "arcticons:minesweeper-twist",
	});
}

export default Component;
