import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uq9s2sdvg {
  fill: currentColor;
  d: path("M5.99 3a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 0a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-1.995a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm9.08 3.543l3.86 15.483a2 2 0 0 1-1.457 2.425l-1.963.49a2 2 0 0 1-2.424-1.458L16.226 8a2 2 0 0 1 1.456-2.425l1.963-.489a2 2 0 0 1 2.425 1.457");
}
</style><path class="uq9s2sdvg"/>`,
		"fallback": "fluent:library-28-filled",
	});
}

export default Component;
