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
		"content": `<style>.f01hsjb6q {
  fill: currentColor;
  d: path("M15 14h3V9h-5V4H6v16h9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.o5wv7ob-z {
  fill: currentColor;
  d: path("M15 22H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h8l6 6v6h-2V9h-5V4H6v16h9zm4-.34v-2.24l2.95 2.95l1.41-1.41L20.41 18h2.24v-2H17v5.66z");
}
</style><path class="f01hsjb6q"/><path class="o5wv7ob-z"/>`,
		"fallback": "ic:twotone-file-open",
	});
}

export default Component;
