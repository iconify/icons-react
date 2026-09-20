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
		"content": `<style>.a2j843u_h {
  fill: currentColor;
  d: path("M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M38 200v-50h18a6 6 0 0 0 0-12H38v-20h18a6 6 0 0 0 0-12H38V86h18a6 6 0 0 0 0-12H38V56a2 2 0 0 1 2-2h42v148H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2H94V54h122a2 2 0 0 1 2 2Z");
}
</style><path class="a2j843u_h"/>`,
		"fallback": "ph:sidebar-light",
	});
}

export default Component;
