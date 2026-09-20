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
		"content": `<style>.hdru7dbqq {
  fill: currentColor;
  d: path("M12 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a3 3 0 0 1-3 3H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4V8a1 1 0 0 1 1-1h4zm5 0h-4v4a1 1 0 0 1-1 1H8v4a1 1 0 0 1-1 1H3v4h12a2 2 0 0 0 2-2z");
}
</style><path class="hdru7dbqq"/>`,
		"fallback": "fluent:step-20-regular",
	});
}

export default Component;
