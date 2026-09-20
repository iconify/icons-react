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
		"content": `<style>.i5vjvgs8l {
  fill: currentColor;
  d: path("M15.499 2.042a.75.75 0 0 1 .459.957l-6.5 18.5A.75.75 0 0 1 8.043 21l6.5-18.5a.75.75 0 0 1 .956-.459");
}
</style><path class="i5vjvgs8l"/>`,
		"fallback": "fluent:slash-forward-24-regular",
	});
}

export default Component;
