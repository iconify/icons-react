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
		"content": `<style>.r2cb6ibhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 7L8.3069 4.5719C8.1899 4.4041 8.1272 4.2045 8.1272 4C8.1272 3.4477 8.5749 3 9.1272 3C9.2438 3 9.3594 3.0203 9.469 3.0602L11.6583 3.8563C11.7678 3.8961 11.8834 3.9165 12 3.9165C12.1166 3.9165 12.2322 3.8961 12.3417 3.8563L14.531 3.0602C14.6406 3.0203 14.7562 3 14.8728 3C15.4251 3 15.8728 3.4477 15.8728 4C15.8728 4.2045 15.8101 4.4041 15.6931 4.5719L14 7L15.1978 7.3422C18.6322 8.3235 21 11.4626 21 15.0344L21 17C21 19.2091 19.2091 21 17 21L7 21C4.7909 21 3 19.2091 3 17L3 15.0344C3 11.4626 5.3678 8.3235 8.8022 7.3422L10 7ZM10 7L14 7");
}
</style><path class="r2cb6ibhn"/>`,
		"fallback": "keyline-icons:money-bag",
	});
}

export default Component;
