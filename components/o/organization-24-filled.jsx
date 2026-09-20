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
		"content": `<style>.l2rhmu3-o {
  fill: currentColor;
  d: path("M7.998 5.75A3.752 3.752 0 1 1 12.5 9.428V11.5h3.25A2.25 2.25 0 0 1 18 13.75v.825a3.754 3.754 0 0 1-.748 7.43a3.752 3.752 0 0 1-.752-7.43v-.825a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75v.825a3.754 3.754 0 0 1-.748 7.43a3.752 3.752 0 0 1-.752-7.43v-.825a2.25 2.25 0 0 1 2.25-2.25H11V9.428A3.754 3.754 0 0 1 7.998 5.75");
}
</style><path class="l2rhmu3-o"/>`,
		"fallback": "fluent:organization-24-filled",
	});
}

export default Component;
