import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i9utorbmg {
  fill: currentColor;
  d: path("M3 2.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V3H8v10h1a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1h1V3H4v1.5a.5.5 0 0 1-1 0z");
}
</style><path class="i9utorbmg"/>`,
		"fallback": "fluent:text-t-16-regular",
	});
}

export default Component;
