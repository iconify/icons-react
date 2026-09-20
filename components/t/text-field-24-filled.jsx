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
		"content": `<style>.w8qczbbbg {
  fill: currentColor;
  d: path("M2 6.75A3.75 3.75 0 0 1 5.75 3h12.5A3.75 3.75 0 0 1 22 6.75v10.5A3.75 3.75 0 0 1 18.25 21H5.75A3.75 3.75 0 0 1 2 17.25zm10.75.75h2.75v.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 1 0 1.5 0V7.5h2.75v9h-.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.5z");
}
</style><path class="w8qczbbbg"/>`,
		"fallback": "fluent:text-field-24-filled",
	});
}

export default Component;
