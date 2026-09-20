import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":266};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.djjy05bmd {
  fill: var(--svg-color--ff9640, #ff9640);
  d: path("m202.636 119.88l-149.27 35.578L0 238.987h128.388l17.015-27.07z");
}

.jr6jsxbfx {
  fill: var(--svg-color--00b5de, #00b5de);
  d: path("M256.002 25.523H127.614l-17.788 27.843l92.81 57.233z");
}

.te5cysb-x {
  fill: var(--svg-color--00decc, #00decc);
  d: path("M109.826 53.366L23.976 0v128.388l30.163 17.015l148.497-34.804z");
}

.tivu54bfu {
  fill: var(--svg-color--ff5529, #ff5529);
  d: path("m230.48 136.896l-27.844-17.016l-57.233 92.037l85.077 53.366z");
}
</style><path class="jr6jsxbfx"/><path class="te5cysb-x"/><path class="tivu54bfu"/><path class="djjy05bmd"/>`,
		"fallback": "logos:modx-icon",
	});
}

export default Component;
