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
		"content": `<style>.ol1d5gzqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.948 14.948L9.2585 19.5544C8.9024 19.8427 8.4582 20 8 20C6.8954 20 6 19.1046 6 18L6 6M13.6917 8.0348L17.6292 11.2228C17.8638 11.4127 18 11.6983 18 12C18 12.101 17.9847 12.2014 17.9546 12.2978M2 2L22 22");
}
</style><path class="ol1d5gzqa"/>`,
		"fallback": "keyline-icons:play-off",
	});
}

export default Component;
