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
		"content": `<style>.ulkb0qsgn {
  fill: var(--svg-color--99aab5, #99aab5);
  d: path("M24 10c0-4.971-2.91-10-6.5-10S11 5.029 11 10c0 3.744 1.651 6.385 4 7.461V33.5a2.5 2.5 0 1 0 5 0V17.461c2.349-1.076 4-3.717 4-7.461");
}
</style><path class="ulkb0qsgn"/>`,
		"fallback": "twemoji:spoon",
	});
}

export default Component;
