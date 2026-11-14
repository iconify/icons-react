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
		"content": `<style>.yeqcbwbre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5v-7h6v-5h7v3h6v9Zm6-7v7m7-9v9M12 12v5");
}
</style><path class="yeqcbwbre"/>`,
		"fallback": "uix-sharp:leaderboard",
	});
}

export default Component;
