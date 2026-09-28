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
		"content": `<style>.zbyjyqbed {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.0886 4.0045L18.82 4.6865C20.8483 6.5779 22 9.2267 22 12C22 13.2499 21.7657 14.4887 21.3092 15.6523L20.944 16.5832M19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C6.4772 22 2 17.5228 2 12C2 9.3478 3.0536 6.8043 4.9289 4.9289M12 1L12 7.3431M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="zbyjyqbed"/>`,
		"fallback": "keyline-icons:power-off-sharp",
	});
}

export default Component;
