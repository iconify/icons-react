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
		"content": `<style>.hzh7xox9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5V16H9v-3.25h6V18h5.5v3.5ZM9 16v5.5m6-3.5v3.5M12.514 4.167l.162.368a1.5 1.5 0 0 0 1.222.887l.4.041a.562.562 0 0 1 .317.978l-.299.268a1.5 1.5 0 0 0-.467 1.436l.085.392a.562.562 0 0 1-.832.605l-.347-.202a1.5 1.5 0 0 0-1.51 0l-.347.202a.562.562 0 0 1-.832-.605l.085-.392a1.5 1.5 0 0 0-.467-1.436l-.299-.268a.562.562 0 0 1 .317-.978l.4-.041a1.5 1.5 0 0 0 1.222-.887l.162-.368a.562.562 0 0 1 1.028 0");
}
</style><path class="hzh7xox9x"/>`,
		"fallback": "uix:leaderboard-ai",
	});
}

export default Component;
