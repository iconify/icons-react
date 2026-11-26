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
		"content": `<style>.d_mz-hb5z {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.0711 19.0711L12 12M4.929 19.0711L12 12M12 2L12 12L12 22M19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 6.4772 17.5228 2 12 2C6.4772 2 2 6.4772 2 12C2 14.7614 3.1193 17.2614 4.929 19.0711C6.7386 20.8807 9.2386 22 12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711Z");
}
</style><path class="d_mz-hb5z"/>`,
		"fallback": "keyline-icons:peace-sharp",
	});
}

export default Component;
