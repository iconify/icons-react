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
		"content": `<style>.f6thokb_c {
  fill: currentColor;
  d: path("M1 3v18h22V3zm20 16H3V5h18zM9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59z");
}
</style><path class="f6thokb_c"/>`,
		"fallback": "ic:sharp-cancel-presentation",
	});
}

export default Component;
