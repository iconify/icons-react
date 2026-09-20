import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ypkukuijd {
  fill: currentColor;
  d: path("M28.707 3.293a1 1 0 0 1 0 1.414l-24 24a1 1 0 0 1-1.414-1.414l24-24a1 1 0 0 1 1.414 0");
}
</style><path class="ypkukuijd"/>`,
		"fallback": "fluent:line-32-regular",
	});
}

export default Component;
