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
		"content": `<style>.nd_f2la9e {
  fill: currentColor;
  d: path("M6 19v-4h1.616v4zm5.808 0v-9h1.615v9zm5.577 0V5H19v14z");
}
</style><path class="nd_f2la9e"/>`,
		"fallback": "material-symbols-light:signal-cellular-alt",
	});
}

export default Component;
