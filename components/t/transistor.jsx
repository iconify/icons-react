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
		"content": `<style>.yjsmnyttm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.3 18.47h13v4.64h-13Zm-2.87 8.88a1.85 1.85 0 0 1 1.85-1.86h33.44a1.85 1.85 0 0 1 1.85 1.86m-.82-20.81a2 2 0 1 0-2 2a2 2 0 0 0 2-2m-2 9.06v-7M14.4 13.43H8.3v2.15h-1a1.87 1.87 0 0 0-1.87 1.86v24.2a1.85 1.85 0 0 0 1.85 1.86h33.43a1.86 1.86 0 0 0 1.86-1.86V17.5a1.86 1.86 0 0 0-1.86-1.86H21.3v-2.21h-4.64v2.21H14.4Z");
}
</style><path class="yjsmnyttm"/>`,
		"fallback": "arcticons:transistor",
	});
}

export default Component;
