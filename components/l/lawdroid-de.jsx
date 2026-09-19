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
		"content": `<style>.hojyp2bfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.579 16.727c-1.717 1.539-1.717 4.331 2.465 5.72c2.33.94 5.108 1.404 5.571 4.182c0 4.89-9.058 4.89-9.058 0m7.982-2.453c1.716-1.54 1.716-4.331-2.465-5.72c-2.316-.927-5.108-1.39-5.571-4.182c0-4.877 9.058-4.877 9.058 0m19.9 2.556c-1.716 1.54-1.716 4.332 2.465 5.721c2.316.94 5.108 1.403 5.571 4.182c0 4.89-9.058 4.89-9.058 0m7.982-2.557c1.717-1.54 1.717-4.331-2.465-5.72c-2.33-.927-5.108-1.39-5.571-4.182c0-4.877 9.058-4.877 9.058 0m-21.916 9.55c-1.73 1.54-1.73 4.331 2.451 5.72c2.33.927 5.122 1.39 5.585 4.182c0 4.877-9.058 4.877-9.058 0m7.968-2.576c1.73-1.54 1.73-4.331-2.451-5.72c-2.33-.94-5.122-1.404-5.585-4.183c0-4.89 9.058-4.89 9.058 0");
}
</style><path class="hojyp2bfr"/>`,
		"fallback": "arcticons:lawdroid-de",
	});
}

export default Component;
