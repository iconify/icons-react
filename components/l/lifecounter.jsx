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
		"content": `<style>.kb5o6cbak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.084 38.461a4.694 4.694 0 1 1-9.387 0a4.694 4.694 0 1 1 9.387 0m-18.783 0a4.694 4.694 0 1 1-9.387 0a4.694 4.694 0 0 1 9.387 0m9.392-28.922a4.694 4.694 0 1 1-9.387 0a4.694 4.694 0 1 1 9.387 0M44 20.551a4.694 4.694 0 1 1-9.387 0a4.694 4.694 0 1 1 9.387 0m-30.613 0a4.694 4.694 0 1 1-9.387 0a4.694 4.694 0 0 1 9.387 0");
}
</style><path class="kb5o6cbak"/>`,
		"fallback": "arcticons:lifecounter",
	});
}

export default Component;
