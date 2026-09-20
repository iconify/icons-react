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
		"content": `<style>.x7i8adb1l {
  fill: currentColor;
  d: path("M16 12a8 8 0 1 1 16 0v12a8 8 0 1 1-16 0zm8-5.5a5.5 5.5 0 0 0-5.5 5.5v12a5.5 5.5 0 1 0 11 0V12A5.5 5.5 0 0 0 24 6.5m1 31.215c7.265-.513 13-6.57 13-13.965a1.25 1.25 0 1 0-2.5 0c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5a1.25 1.25 0 1 0-2.5 0c0 7.225 5.473 13.172 12.5 13.92v5.08a1.25 1.25 0 1 0 2.5 0z");
}
</style><path class="x7i8adb1l"/>`,
		"fallback": "fluent:mic-48-regular",
	});
}

export default Component;
