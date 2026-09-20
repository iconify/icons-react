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
		"content": `<style>.dwd9n6b-e {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m43.14-111.54l-32 80a12 12 0 0 1-22.28 0l-32-80a12 12 0 1 1 22.28-8.92L128 143.69l20.86-52.15a12 12 0 0 1 22.28 8.92");
}
</style><path class="dwd9n6b-e"/>`,
		"fallback": "ph:letter-circle-v-bold",
	});
}

export default Component;
