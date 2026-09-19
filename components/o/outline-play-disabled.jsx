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
		"content": `<style>.rbyk9qy4o {
  fill: currentColor;
  d: path("M16.45 13.62L19 12L8 5v.17zM2.81 2.81L1.39 4.22L8 10.83V19l4.99-3.18l6.78 6.78l1.41-1.41zM10 15.36v-2.53l1.55 1.55z");
}
</style><path class="rbyk9qy4o"/>`,
		"fallback": "ic:outline-play-disabled",
	});
}

export default Component;
