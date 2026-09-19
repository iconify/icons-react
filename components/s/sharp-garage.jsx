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
		"content": `<style>.alqc54g4m {
  cx: 15px;
  cy: 13px;
  r: 1px;
  fill: currentColor;
}

.kr63tmw5r {
  fill: currentColor;
  d: path("M22 2H2v20h20zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69z");
}

.po6vlitvx {
  cx: 9px;
  cy: 13px;
  r: 1px;
  fill: currentColor;
}

.s6zu9-z9k {
  fill: currentColor;
  d: path("m8.33 7.5l-.66 2h8.66l-.66-2z");
}
</style><circle class="alqc54g4m"/><circle class="po6vlitvx"/><path class="s6zu9-z9k"/><path class="kr63tmw5r"/>`,
		"fallback": "ic:sharp-garage",
	});
}

export default Component;
