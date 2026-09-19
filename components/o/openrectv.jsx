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
		"content": `<style>.bfey00bhx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.201 23.134L21.2 17.357a1 1 0 0 0-1.5.866v11.554a1 1 0 0 0 1.5.866l10-5.777a1 1 0 0 0 .001-1.732");
}

.gwqk03b7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5a21.477 21.477 0 1 1-6.117.883L24 9.5Z");
}

.qtgsqktdi {
  cx: 24px;
  cy: 24px;
  r: 14.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="bfey00bhx"/><circle class="qtgsqktdi"/><path class="gwqk03b7a"/>`,
		"fallback": "arcticons:openrectv",
	});
}

export default Component;
