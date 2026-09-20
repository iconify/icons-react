import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ay690b4kj {
  fill: currentColor;
  d: path("M6 2a.5.5 0 0 1 .467.319l2.43 6.25l.009.022l.17.437l-.527 1.404l-.456-1.17H3.907l-.94 2.42a.5.5 0 1 1-.933-.363L3.095 8.59l.008-.021l2.432-6.251A.5.5 0 0 1 6 2M4.297 8.262h3.408L6.001 3.88zm8.171-2.94a.5.5 0 0 0-.935.002L7.154 17H6.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.278l1.125-3h5.373l1.149 3H15.5a.5.5 0 1 0 0 1h2a.5.5 0 1 0 0-1h-.56zM14.337 13H9.722l2.283-6.09z");
}
</style><path class="ay690b4kj"/>`,
		"fallback": "fluent:text-font-20-regular",
	});
}

export default Component;
