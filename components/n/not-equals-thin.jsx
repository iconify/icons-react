import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ip_kg9jwp {
  fill: currentColor;
  d: path("M220 160a4 4 0 0 1-4 4H100.68L51 218.69a4 4 0 0 1-6-5.38L89.87 164H40a4 4 0 0 1 0-8h57.14l50.91-56H40a4 4 0 0 1 0-8h115.32L205 37.31a4 4 0 0 1 6 5.38L166.13 92H216a4 4 0 0 1 0 8h-57.14L108 156h108a4 4 0 0 1 4 4");
}
</style><path class="ip_kg9jwp"/>`,
		"fallback": "ph:not-equals-thin",
	});
}

export default Component;
