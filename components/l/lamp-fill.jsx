import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m9a78t89o {
  fill: currentColor;
  d: path("M246.68 156.4A8 8 0 0 1 240 160h-32v32a8 8 0 0 1-16 0v-32h-56v48h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24v-48H16a8 8 0 0 1-7.35-11.15l48-112A8 8 0 0 1 64 32h128a8 8 0 0 1 7.35 4.85l48 112a8 8 0 0 1-.67 7.55");
}
</style><path class="m9a78t89o"/>`,
		"fallback": "ph:lamp-fill",
	});
}

export default Component;
