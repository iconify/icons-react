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
		"content": `<style>.p5tr6dbmg {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-76 80a44 44 0 1 1-34.22 71.66a8 8 0 0 1 12.44-10.06a28 28 0 1 0 .35-35.62a8 8 0 0 1-14-6.29l7.55-52.82A8 8 0 0 1 104 64h56a8 8 0 0 1 0 16h-49.06L107 107.4a44 44 0 0 1 17-3.4");
}
</style><path class="p5tr6dbmg"/>`,
		"fallback": "ph:number-five-fill",
	});
}

export default Component;
