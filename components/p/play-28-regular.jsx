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
		"content": `<style>.wnt-_qivg {
  fill: currentColor;
  d: path("M9.38 4.677a1.25 1.25 0 0 0-1.88 1.08v16.488a1.25 1.25 0 0 0 1.88 1.079l14.698-8.59a.85.85 0 0 0 0-1.467zM6 5.757c0-2.124 2.304-3.447 4.138-2.375l14.697 8.59c1.552.907 1.552 3.15 0 4.057l-14.697 8.59C8.304 25.691 6 24.369 6 22.245z");
}
</style><path class="wnt-_qivg"/>`,
		"fallback": "fluent:play-28-regular",
	});
}

export default Component;
