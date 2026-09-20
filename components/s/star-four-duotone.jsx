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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.mq7jfjbzf {
  d: path("m226.76 135.48l-66.94 24.34l-24.34 66.94a8 8 0 0 1-15 0l-24.3-66.94l-66.94-24.34a8 8 0 0 1 0-15l66.94-24.3l24.34-66.94a8 8 0 0 1 15 0l24.34 66.94l66.94 24.34a8 8 0 0 1-.04 14.96");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uz5lfdckj {
  d: path("m229.5 113l-63.44-23.06L143 26.5a16 16 0 0 0-30 0L89.94 89.94L26.5 113a16 16 0 0 0 0 30l63.44 23.07L113 229.5a16 16 0 0 0 30 0l23.07-63.44L229.5 143a16 16 0 0 0 0-30m-72.42 39.3a8 8 0 0 0-4.78 4.78L128 223.9l-24.3-66.82a8 8 0 0 0-4.78-4.78L32.1 128l66.82-24.3a8 8 0 0 0 4.78-4.78L128 32.1l24.3 66.82a8 8 0 0 0 4.78 4.78L223.9 128Z");
}
</style><g class="cuyn6tgcc"><path class="mq7jfjbzf"/><path class="uz5lfdckj"/></g>`,
		"fallback": "ph:star-four-duotone",
	});
}

export default Component;
