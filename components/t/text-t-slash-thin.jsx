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
		"content": `<style>.um5llgobq {
  fill: currentColor;
  d: path("M210.69 219a4 4 0 0 1-5.65-.27l-73-80.34V196h28a4 4 0 0 1 0 8H96a4 4 0 0 1 0-8h28v-66.45L60.78 60H60v28a4 4 0 0 1-8 0V56a4 4 0 0 1 2-3.45l-9-9.86a4 4 0 0 1 6-5.38l160 176a4 4 0 0 1-.31 5.69M105.79 60H124v20.43a4 4 0 0 0 8 0V60h64v28a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4h-94.21a4 4 0 0 0 0 8");
}
</style><path class="um5llgobq"/>`,
		"fallback": "ph:text-t-slash-thin",
	});
}

export default Component;
