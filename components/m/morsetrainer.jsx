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
		"content": `<style>.j8q34s3pp {
  fill: none;
  stroke: currentColor;
  d: path("M19.16 14.88v11.3H23V30h4v8.6h6.5v-15h-3.8V15h-2.5v8.6H22V15Z");
}

.x1m8s5b5s {
  fill: none;
  stroke: currentColor;
  d: path("M40.16 6.58c4.1 8.3 4 30.9-1.8 35c-4.2 2.9-25.1-1.6-29.8-6.5c-3.5-3.7-4-10-3.3-13.6c1-5.6 32.5-20 34.9-14.9Z");
}
</style><path class="x1m8s5b5s"/><path class="j8q34s3pp"/>`,
		"fallback": "arcticons:morsetrainer",
	});
}

export default Component;
