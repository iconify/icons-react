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
		"content": `<style>.mc8y4nbck {
  fill: currentColor;
  d: path("M9.995 0C4.475 0 0 4.475 0 9.995s4.475 9.996 9.995 9.996s9.996-4.475 9.996-9.996C19.99 4.475 15.516 0 9.995 0M2 9.995a7.995 7.995 0 1 1 15.99 0a7.995 7.995 0 0 1-15.99 0M6 10a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1");
}
</style><path class="mc8y4nbck"/>`,
		"fallback": "fluent:presence-dnd-20-regular",
	});
}

export default Component;
