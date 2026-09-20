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
		"content": `<style>.fqxa3jboj {
  fill: currentColor;
  d: path("M8 4h5.95a2.5 2.5 0 0 0-2.45-2H8zM7 2H4.5a2.5 2.5 0 0 0-2.45 2H7zm1 12h3.5a2.5 2.5 0 0 0 2.45-2H8zm-1-2H2.05a2.5 2.5 0 0 0 2.45 2H7zm-5-1V5h12v6zm5-5v4h1V6z");
}
</style><path class="fqxa3jboj"/>`,
		"fallback": "fluent:table-cells-split-16-filled",
	});
}

export default Component;
