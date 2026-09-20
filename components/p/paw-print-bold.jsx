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
		"content": `<style>.onl4b8bvq {
  fill: currentColor;
  d: path("M236 108a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-168 0a24 24 0 1 0-24 24a24 24 0 0 0 24-24m24-24a24 24 0 1 0-24-24a24 24 0 0 0 24 24m72 0a24 24 0 1 0-24-24a24 24 0 0 0 24 24m48 100a44 44 0 0 1-61.1 40.55a60.15 60.15 0 0 0-45.8 0A44 44 0 0 1 67 145.34a31.33 31.33 0 0 0 14.91-18.74a48 48 0 0 1 92.18 0A31.34 31.34 0 0 0 189 145.34A44 44 0 0 1 212 184m-24 0a20 20 0 0 0-10.49-17.6l-.1-.06a55.22 55.22 0 0 1-26.37-33a24 24 0 0 0-46.08 0a55.2 55.2 0 0 1-26.37 33.05l-.1.06A20 20 0 0 0 88 204a19.8 19.8 0 0 0 7.8-1.58h.13a84 84 0 0 1 64.14 0h.13A19.8 19.8 0 0 0 168 204a20 20 0 0 0 20-20");
}
</style><path class="onl4b8bvq"/>`,
		"fallback": "ph:paw-print-bold",
	});
}

export default Component;
