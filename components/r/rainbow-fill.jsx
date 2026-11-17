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
		"content": `<style>.mr00eibit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 19V15C2 9.477 6.4772 5 12 5C17.5228 5 22 9.477 22 15V19M6 19V15C6 11.686 8.6863 9 12 9C15.3137 9 18 11.686 18 15V19M10 19V15C10 13.895 10.8954 13 12 13C13.1046 13 14 13.895 14 15V19");
}
</style><path class="mr00eibit"/>`,
		"fallback": "keyline-icons:rainbow-fill",
	});
}

export default Component;
