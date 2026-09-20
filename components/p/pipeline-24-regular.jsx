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
		"content": `<style>.ie_045bec {
  fill: currentColor;
  d: path("M2 6.25A2.25 2.25 0 0 1 6.486 6h11.028A2.25 2.25 0 0 1 22 6.25v10.5a2.25 2.25 0 0 1-4.486.25H6.486A2.25 2.25 0 0 1 2 16.75zm3 0a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm1.5 9.25h11v-8h-11zm14-9.25a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="ie_045bec"/>`,
		"fallback": "fluent:pipeline-24-regular",
	});
}

export default Component;
