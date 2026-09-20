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
		"content": `<style>.i-3ohgbnp {
  fill: currentColor;
  d: path("m10.05 13.95l-6.475-2.625q-.325-.125-.475-.387t-.15-.538t.163-.537t.487-.388l15.35-5.7q.3-.125.575-.05T20 4t.275.475t-.05.575l-5.7 15.35q-.125.325-.387.488t-.538.162t-.537-.15t-.388-.475zm3.5 3.35L17.6 6.4L6.7 10.45l4.9 1.95zm-1.95-4.9");
}
</style><path class="i-3ohgbnp"/>`,
		"fallback": "material-symbols:near-me-outline-rounded",
	});
}

export default Component;
