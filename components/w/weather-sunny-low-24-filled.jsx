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
		"content": `<style>.n36w9gwvv {
  fill: currentColor;
  d: path("M12.75 2.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zm6.28 2.22a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0M6.59 13a5.5 5.5 0 1 1 10.819 0h3.841a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm.16 3a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm4 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM4.97 4.97a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 1 1-1.06 1.061L4.97 6.031a.75.75 0 0 1 0-1.061");
}
</style><path class="n36w9gwvv"/>`,
		"fallback": "fluent:weather-sunny-low-24-filled",
	});
}

export default Component;
