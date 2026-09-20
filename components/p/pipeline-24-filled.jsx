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
		"content": `<style>.vgsocwb5g {
  fill: currentColor;
  d: path("M2 6a2 2 0 1 1 4 0v11a2 2 0 1 1-4 0zm16 0a2 2 0 1 1 4 0v11a2 2 0 1 1-4 0zm-1.5 0h-9v11h9z");
}
</style><path class="vgsocwb5g"/>`,
		"fallback": "fluent:pipeline-24-filled",
	});
}

export default Component;
