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
		"content": `<style>.t-2a63b5g {
  fill: currentColor;
  d: path("M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19M32 96h40v64H32Zm112 111.64l-56-43.55V91.91l56-43.55ZM208 128a39.93 39.93 0 0 1-10 26.46a8 8 0 0 1-12-10.58a24 24 0 0 0 0-31.72a8 8 0 1 1 12-10.58A40 40 0 0 1 208 128");
}
</style><path class="t-2a63b5g"/>`,
		"fallback": "ph:speaker-low",
	});
}

export default Component;
