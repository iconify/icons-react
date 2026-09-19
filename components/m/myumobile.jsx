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
		"content": `<style>.cy2hvbc-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.964 32.147c3.23 3.783 9.996 1.78 10.734-2.91c.667-4.239-6.2-14.637 1.128-16.13c10.34-2.108 9.329 13.851 7.483 19.878c-1.405 4.587-5.123 11.775-11.115 8.826c-.99-.488-1.173-1.541-2.501-1.55c-1.188-.008-3.14 1.322-4.542 1.543c-19.243 3.034-19.762-30.6-6.84-35.693c2.857-1.126 6.889-.818 8.684 1.954c3.508 5.418-3.675 11.922-4.324 17.229c-.26 2.127-.157 5.155 1.293 6.853");
}
</style><path class="cy2hvbc-x"/>`,
		"fallback": "arcticons:myumobile",
	});
}

export default Component;
