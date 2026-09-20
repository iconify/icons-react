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
		"content": `<style>.hnnvxlb0u {
  fill: currentColor;
  d: path("M11.46 11.54q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m0-4q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m0-4q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m3 10q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m2.826-2.85q-.23-.23-.23-.54t.23-.54t.539-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m2.826-2.8q-.23-.23-.23-.54t.23-.54t.539-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23M8.46 13.54q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m-2.824-2.85q-.23-.23-.23-.54t.23-.54t.539-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m-2.824-2.8q-.23-.23-.23-.54t.23-.54t.539-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23M11.5 21.5v-4h-4v-1h9v1h-4v4z");
}
</style><path class="hnnvxlb0u"/>`,
		"fallback": "material-symbols-light:sprinkler",
	});
}

export default Component;
