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
		"content": `<style>.yot74wbfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 18C7.5 15.5147 9.5147 13.5 12 13.5C14.4853 13.5 16.5 15.5147 16.5 18M2 18H3.5M20.5 18H22M4.9289 10.9289L5.9896 11.9896M19.0711 10.9289L18.0104 11.9896M2 22H22M12 2V9M8.5 5.5L12 9L15.5 5.5");
}
</style><path class="yot74wbfk"/>`,
		"fallback": "keyline-icons:sunset-fill",
	});
}

export default Component;
