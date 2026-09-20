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
		"content": `<style>.i7xw7fbgq {
  fill: currentColor;
  d: path("M6 19v-4h1.616v4zm5.808 0v-9h1.615v9z");
}
</style><path class="i7xw7fbgq"/>`,
		"fallback": "material-symbols-light:signal-cellular-alt-2-bar-sharp",
	});
}

export default Component;
