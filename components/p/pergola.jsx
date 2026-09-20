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
		"content": `<style>.nk7-x1btt {
  fill: currentColor;
  d: path("M3 21V3q0-.425.288-.712T4 2t.713.288T5 3v1h14V3q0-.425.288-.712T20 2t.713.288T21 3v18h-2V10H5v11zm8 0v-3H8v-2h8v2h-3v3z");
}
</style><path class="nk7-x1btt"/>`,
		"fallback": "material-symbols:pergola",
	});
}

export default Component;
