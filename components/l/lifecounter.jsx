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
		"content": `<style>.n-r29xa2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.084 38.461a4.694 4.694 0 0 1-4.693 4.694h0a4.694 4.694 0 0 1-4.694-4.694h0a4.694 4.694 0 0 1 4.694-4.693h0a4.694 4.694 0 0 1 4.693 4.693m-18.783 0a4.694 4.694 0 0 1-4.693 4.694h0a4.694 4.694 0 1 1 4.693-4.694m9.392-28.922a4.694 4.694 0 0 1-4.694 4.693h0a4.694 4.694 0 0 1-4.693-4.693h0a4.694 4.694 0 0 1 4.693-4.694h0a4.694 4.694 0 0 1 4.694 4.694M44 20.551a4.694 4.694 0 0 1-4.693 4.694h0a4.694 4.694 0 0 1-4.694-4.694h0a4.694 4.694 0 0 1 4.694-4.693h0A4.694 4.694 0 0 1 44 20.55m-30.613.001a4.694 4.694 0 1 1-9.387 0a4.694 4.694 0 0 1 9.387 0");
}
</style><path class="n-r29xa2m"/>`,
		"fallback": "arcticons:lifecounter",
	});
}

export default Component;
