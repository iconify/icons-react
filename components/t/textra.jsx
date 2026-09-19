import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qt-e_96do {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.566 31.747a4.196 4.196 0 0 0 4.127 4.062c7.673.286 9.654 2.193 9.437 6.691c6.231-4.862 10.915-6.633 17.177-6.695a4.006 4.006 0 0 0 4.127-3.872L41.37 9.438a4.14 4.14 0 0 0-4.247-3.876L10.689 5.5c-1.868.05-4.015 2.379-4.061 4.313Z");
}

.x677rybzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.536 23.095l9.731-.07c4.324.746 4.293 3.42 4.622 5.589l-11.731.066c-3.257-.356-2.73-3.102-2.623-5.585m.07-3.59l17.18.07c4.425-.027 4.812-2.742 4.897-5.658H15.88c-1.895-.004-2.39 2.293-2.274 5.589Z");
}
</style><path class="qt-e_96do"/><path class="x677rybzn"/>`,
		"fallback": "arcticons:textra",
	});
}

export default Component;
