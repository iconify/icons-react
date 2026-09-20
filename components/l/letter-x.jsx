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
		"content": `<style>.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.yyl1hmbsx {
  fill: var(--svg-color--fff, #fff);
  d: path("m15.304 17.187l-5.023-6.821c-.31-.404-.495-.869-.495-1.365c0-1.364 1.023-2.263 2.356-2.263c.775 0 1.581.527 2.015 1.147l3.845 5.457l3.845-5.457c.435-.62 1.24-1.147 2.015-1.147c1.334 0 2.358.899 2.358 2.263c0 .496-.186.961-.496 1.364L20.7 17.186l6.139 8.248c.248.341.527.93.527 1.581c0 1.303-.992 2.17-2.355 2.17c-.838 0-1.457-.371-1.923-1.022l-5.085-7.069l-5.085 7.069c-.465.651-1.085 1.022-1.922 1.022c-1.364 0-2.356-.867-2.356-2.17c0-.651.279-1.24.527-1.581z");
}
</style><path class="x-kz1kb7j"/><path class="yyl1hmbsx"/>`,
		"fallback": "twemoji:letter-x",
	});
}

export default Component;
