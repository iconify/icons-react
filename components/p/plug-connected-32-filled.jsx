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
		"content": `<style>.lt5nb3u-b {
  fill: currentColor;
  d: path("M13.454 6.526a3.25 3.25 0 0 0 0 4.597l7.426 7.424a3.25 3.25 0 0 0 4.596 0l.036-.037a8.5 8.5 0 0 0 .666-11.272l3.53-3.53a1 1 0 0 0-1.415-1.414l-3.53 3.53a8.5 8.5 0 0 0-11.272.666zm5.095 14.351a3.25 3.25 0 0 1 0 4.596l-.036.037a8.5 8.5 0 0 1-11.273.666l-3.529 3.53a1 1 0 0 1-1.414-1.415l3.53-3.53a8.5 8.5 0 0 1 .665-11.272l.036-.036a3.25 3.25 0 0 1 4.596 0z");
}
</style><path class="lt5nb3u-b"/>`,
		"fallback": "fluent:plug-connected-32-filled",
	});
}

export default Component;
