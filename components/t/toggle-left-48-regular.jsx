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
		"content": `<style>.jkcb5acyc {
  fill: currentColor;
  d: path("M9.5 24a5 5 0 1 1 10 0a5 5 0 0 1-10 0M4 24c0-5.523 4.477-10 10-10h20c5.523 0 10 4.477 10 10s-4.477 10-10 10H14C8.477 34 4 29.523 4 24m10-7.5a7.5 7.5 0 0 0 0 15h20a7.5 7.5 0 0 0 0-15z");
}
</style><path class="jkcb5acyc"/>`,
		"fallback": "fluent:toggle-left-48-regular",
	});
}

export default Component;
