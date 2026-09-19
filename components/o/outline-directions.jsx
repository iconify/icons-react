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
		"content": `<style>.b8tlutxgk {
  fill: currentColor;
  d: path("m22.43 10.59l-9.01-9.01c-.75-.75-2.07-.76-2.83 0l-9 9c-.78.78-.78 2.04 0 2.82l9 9c.39.39.9.58 1.41.58s1.02-.19 1.41-.58l8.99-8.99c.79-.76.8-2.02.03-2.82m-10.42 10.4l-9-9l9-9l9 9zM8 11v4h2v-3h4v2.5l3.5-3.5L14 7.5V10H9c-.55 0-1 .45-1 1");
}
</style><path class="b8tlutxgk"/>`,
		"fallback": "ic:outline-directions",
	});
}

export default Component;
