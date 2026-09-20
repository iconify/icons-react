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
		"content": `<style>.udy0fabwb {
  d: path("M23.75 5A2.25 2.25 0 0 1 26 7.25v13.5A2.25 2.25 0 0 1 23.75 23H4.25A2.25 2.25 0 0 1 2 20.75V7.25A2.25 2.25 0 0 1 4.25 5zm-13.533 5.217a.75.75 0 0 0 0 1.061l2.72 2.72l-2.72 2.724a.75.75 0 0 0 1.061 1.06l2.72-2.723l2.724 2.724a.75.75 0 0 0 1.06-1.061l-2.723-2.724l2.723-2.715a.75.75 0 0 0-1.06-1.062l-2.724 2.717l-2.72-2.72a.75.75 0 0 0-1.06 0z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="udy0fabwb"/>`,
		"fallback": "fluent:share-stop-28-filled",
	});
}

export default Component;
