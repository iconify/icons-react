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
		"content": `<style>.p4rimwigs {
  fill: currentColor;
  d: path("m10 20l-5-5l5.006-5.006l.707.714L6.922 14.5H17V5h1v10.5H6.921l3.793 3.787z");
}
</style><path class="p4rimwigs"/>`,
		"fallback": "material-symbols-light:subdirectory-arrow-left-sharp",
	});
}

export default Component;
