import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gcukz1agq {
  fill: var(--svg-color--c28fef, #c28fef);
  d: path("M55 32v-8H36v-7h6V9h-6V2h-8v7h-6v8h6v7H9v8h19v13l-7-3v8l7 3v9h8v-6l7 3v-8l-7-3V32z");
}
</style><path class="gcukz1agq"/>`,
		"fallback": "emojione:orthodox-cross",
	});
}

export default Component;
