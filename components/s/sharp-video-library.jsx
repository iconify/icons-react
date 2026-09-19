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
		"content": `<style>.iaktu0poq {
  fill: currentColor;
  d: path("M4 6H2v16h16v-2H4zm18-4H6v16h16zM12 14.5v-9l6 4.5z");
}
</style><path class="iaktu0poq"/>`,
		"fallback": "ic:sharp-video-library",
	});
}

export default Component;
