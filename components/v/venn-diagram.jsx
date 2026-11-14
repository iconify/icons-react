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
		"content": `<style>.jyhtf06km {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.373 6.873Q1.25 8.997 1.25 12t2.123 5.127T8.5 19.25q1.932 0 3.5-.879q1.568.879 3.5.879q3.003 0 5.127-2.123T22.75 12t-2.123-5.127Q18.503 4.75 15.5 4.75q-1.932 0-3.5.879q-1.568-.879-3.5-.879q-3.003 0-5.127 2.123");
}
</style><path class="jyhtf06km"/>`,
		"fallback": "uix-solid:venn-diagram",
	});
}

export default Component;
