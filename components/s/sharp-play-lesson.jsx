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
		"content": `<style>.f12fmegap {
  fill: currentColor;
  d: path("M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m-1.25 7.5v-5l4 2.5z");
}

.iuwj8lu3g {
  fill: currentColor;
  d: path("M18 11c.34 0 .67.03 1 .08V2H3v20h9.26A6.995 6.995 0 0 1 18 11M7 11V4h5v7L9.5 9.5z");
}
</style><path class="iuwj8lu3g"/><path class="f12fmegap"/>`,
		"fallback": "ic:sharp-play-lesson",
	});
}

export default Component;
