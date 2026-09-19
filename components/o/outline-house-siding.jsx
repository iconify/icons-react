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
		"content": `<style>.lhtwx-qnt {
  fill: currentColor;
  d: path("M19 12h3L12 3L2 12h3v8h2v-2h10v2h2zM7.21 10h9.58l.21.19V12H7v-1.81zm7.36-2H9.43L12 5.69zM7 16v-2h10v2z");
}
</style><path class="lhtwx-qnt"/>`,
		"fallback": "ic:outline-house-siding",
	});
}

export default Component;
