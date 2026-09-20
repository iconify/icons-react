import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wt554abpz {
  fill: currentColor;
  d: path("M6 6.707V10a3 3 0 0 0 3.21 2.993a5.5 5.5 0 0 1 1.063-2.013l.711.711a4.5 4.5 0 0 0 6.37 6.287a.5.5 0 0 0 .5-.832l-15-15a.5.5 0 1 0-.708.708zm9.112 9.112l-.148.367a.5.5 0 0 1-.935-.018l-.643-1.8l-.212.496a.5.5 0 0 1-.46.303H12a.5.5 0 0 1 0-1h.385l.322-.753zm3.449.62v.001a4.5 4.5 0 0 0-6.002-6.002zM6.158 4.038l5.66 5.66q.09-.05.182-.097V5a3 3 0 0 0-5.842-.963M4.5 10a.5.5 0 0 0-1 0a5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-.706A5.5 5.5 0 0 1 9 14.5A4.5 4.5 0 0 1 4.5 10");
}
</style><path class="wt554abpz"/>`,
		"fallback": "fluent:mic-pulse-off-20-filled",
	});
}

export default Component;
