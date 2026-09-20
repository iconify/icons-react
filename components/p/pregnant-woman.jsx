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
		"content": `<style>.n9zy9pacq {
  fill: currentColor;
  d: path("M10.73 21.5V16H9V9.423Q9 8.577 9.577 8T11 7.423T12.423 8T13 9.423q.9.24 1.45 1.008t.55 1.723V16h-2.77v5.5zM9.8 5.278q-.491-.492-.491-1.201T9.8 2.876t1.2-.491t1.201.491t.491 1.201t-.491 1.201q-.492.491-1.201.491t-1.201-.491");
}
</style><path class="n9zy9pacq"/>`,
		"fallback": "material-symbols-light:pregnant-woman",
	});
}

export default Component;
