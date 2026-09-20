import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qihbh-bhv {
  fill: currentColor;
  d: path("M17.934 3a3.25 3.25 0 0 0-2.298.952l-11.68 11.68a3.25 3.25 0 0 0 0 4.596l7.818 7.818a3.25 3.25 0 0 0 4.596 0l11.68-11.68a3.25 3.25 0 0 0 .952-2.298V6.25A3.25 3.25 0 0 0 25.752 3zm-.884 2.366A1.25 1.25 0 0 1 17.934 5h7.818c.69 0 1.25.56 1.25 1.25v7.818c0 .332-.132.65-.366.884l-11.68 11.68a1.25 1.25 0 0 1-1.768 0L5.37 18.814a1.25 1.25 0 0 1 0-1.768zM23.002 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="qihbh-bhv"/>`,
		"fallback": "fluent:tag-32-regular",
	});
}

export default Component;
