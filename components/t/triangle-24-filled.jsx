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
		"content": `<style>.i2kl6ibhk {
  fill: currentColor;
  d: path("M2.302 16.63c-.86 1.5.222 3.37 1.951 3.37h15.49c1.729 0 2.812-1.87 1.951-3.37L13.95 3.129c-.865-1.507-3.04-1.507-3.904 0z");
}
</style><path class="i2kl6ibhk"/>`,
		"fallback": "fluent:triangle-24-filled",
	});
}

export default Component;
