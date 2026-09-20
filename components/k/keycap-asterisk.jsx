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
		"content": `<style>.dw6p3mbpy {
  fill: var(--svg-color--fff, #fff);
  d: path("m9.383 11.09l-1.105 1.667a1 1 0 0 0 .281 1.386L25.231 25.19a1 1 0 0 0 1.386-.281l1.105-1.667a1 1 0 0 0-.281-1.386L10.769 10.809a1 1 0 0 0-1.386.281");
}

.q-4dr8lpl {
  fill: var(--svg-color--fff, #fff);
  d: path("M19 7h-2a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1");
}

.x-zolsxqj {
  fill: var(--svg-color--fff, #fff);
  d: path("m26.617 11.09l1.105 1.667a1 1 0 0 1-.281 1.386L10.769 25.191a1 1 0 0 1-1.386-.281l-1.105-1.667a1 1 0 0 1 .281-1.386L25.231 10.81a1 1 0 0 1 1.386.28");
}

.zfv041b7s {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M32 0H4a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4");
}
</style><path class="zfv041b7s"/><path class="q-4dr8lpl"/><path class="x-zolsxqj"/><path class="dw6p3mbpy"/>`,
		"fallback": "twemoji:keycap-asterisk",
	});
}

export default Component;
