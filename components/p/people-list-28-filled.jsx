import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t8fp2vnvo {
  fill: currentColor;
  d: path("M9.5 14a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m14-3.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M2 18.25A2.25 2.25 0 0 1 4.25 16h10.5q.355.001.678.104a1.75 1.75 0 0 0 .42 2.646a1.75 1.75 0 0 0-.052 2.967a5 5 0 0 1-.178.199a2 2 0 0 0-.206.205C14.337 23.143 12.53 24 9.5 24C2 24 2 18.75 2 18.75zm14.75-1.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="t8fp2vnvo"/>`,
		"fallback": "fluent:people-list-28-filled",
	});
}

export default Component;
