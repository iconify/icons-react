import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g84hw2bma {
  fill: currentColor;
  d: path("M6 3a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0zM1 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zm10-2a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0z");
}
</style><path class="g84hw2bma"/>`,
		"fallback": "fluent:poll-16-filled",
	});
}

export default Component;
