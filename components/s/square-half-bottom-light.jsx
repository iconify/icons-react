import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fwgprdbmx {
  fill: currentColor;
  d: path("M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M56 54h144a2 2 0 0 1 2 2v66H54V56a2 2 0 0 1 2-2m50 80v68H86v-68Zm12 0h20v68h-20Zm32 0h20v68h-20Zm-96 66v-66h20v68H56a2 2 0 0 1-2-2m146 2h-18v-68h20v66a2 2 0 0 1-2 2");
}
</style><path class="fwgprdbmx"/>`,
		"fallback": "ph:square-half-bottom-light",
	});
}

export default Component;
