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
		"content": `<style>.ahnd60bam {
  fill: var(--svg-color--31373d, #31373d);
  d: path("m22.238 18.004l9.883-9.883a3 3 0 1 0-4.242-4.243l-9.883 9.883l-9.883-9.882A3 3 0 1 0 3.87 8.122l9.883 9.882l-9.907 9.907a3 3 0 0 0 4.243 4.242l9.906-9.906l9.882 9.882c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a3 3 0 0 0 0-4.242z");
}
</style><path class="ahnd60bam"/>`,
		"fallback": "twemoji:multiplication-sign",
	});
}

export default Component;
