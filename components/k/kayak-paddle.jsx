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
		"content": `<style>.dq7p7jb0b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m15.599 4.513l1.414-1.414q1.944-1.944 3.888 0t0 3.888l-1.414 1.414q-1.658 1.658-3.316.488l-7.282 7.282q1.17 1.658-.488 3.316l-1.414 1.414q-1.944 1.944-3.888 0t0-3.888l1.414-1.414q1.658-1.658 3.316-.488l7.282-7.282q-1.17-1.658.488-3.316");
}
</style><path class="dq7p7jb0b"/>`,
		"fallback": "uix-solid:kayak-paddle",
	});
}

export default Component;
