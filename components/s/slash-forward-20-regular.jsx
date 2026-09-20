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
		"content": `<style>.a1igh8b4b {
  fill: currentColor;
  d: path("M12.658 2.026a.5.5 0 0 1 .317.632l-5 15a.5.5 0 1 1-.95-.316l5-15a.5.5 0 0 1 .633-.316");
}
</style><path class="a1igh8b4b"/>`,
		"fallback": "fluent:slash-forward-20-regular",
	});
}

export default Component;
