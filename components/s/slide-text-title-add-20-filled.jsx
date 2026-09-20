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
		"content": `<style>.u0g44abdn {
  fill: currentColor;
  d: path("M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h4.707A5.5 5.5 0 0 1 18 10.257V6.5A2.5 2.5 0 0 0 15.5 4zM6 7h8a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2m13 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="u0g44abdn"/>`,
		"fallback": "fluent:slide-text-title-add-20-filled",
	});
}

export default Component;
