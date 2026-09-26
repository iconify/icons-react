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
		"content": `<style>.by-tp_ohk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 2.8348C19.6443 4.4253 22 8.0238 22 12C22 13.2499 21.7657 14.4887 21.3092 15.6523M19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C6.4772 22 2 17.5228 2 12C2 9.3478 3.0536 6.8043 4.9289 4.9289M12 2V6.3431M2 2L22 22");
}
</style><path class="by-tp_ohk"/>`,
		"fallback": "keyline-icons:power-off-fill",
	});
}

export default Component;
