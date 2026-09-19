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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lwkcxrb1o {
  cx: 24px;
  cy: 24px;
  r: 2.389px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.o-jprmben {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.611 24v21.367l-.004-9.665A11.945 11.945 0 1 0 12.055 24v17.877");
}
</style><circle class="cpk0fnbgt"/><circle class="lwkcxrb1o"/><path class="o-jprmben"/>`,
		"fallback": "arcticons:mlp-banking",
	});
}

export default Component;
