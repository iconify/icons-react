import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qaedg0b5p {
  fill: var(--svg-color--fff, #fff);
  d: path("M9.785 17.962c0-5.054 1.954-11.41 8.216-11.41c6.264 0 8.217 6.356 8.217 11.41s-1.953 11.41-8.217 11.41c-6.262 0-8.216-6.356-8.216-11.41m11.596 0c0-2.356-.217-7.193-3.379-7.193s-3.379 4.837-3.379 7.193c0 2.201.217 7.193 3.379 7.193s3.379-4.992 3.379-7.193");
}

.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="x-kz1kb7j"/><path class="qaedg0b5p"/>`,
		"fallback": "twemoji:keycap-0",
	});
}

export default Component;
