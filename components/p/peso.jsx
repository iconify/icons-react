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
		"content": `<style>.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.ntp3e6b6p {
  d: path("M11 3.5H6v-2h5a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5H6v-2h5a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3");
}

.ondjn8l7f {
  d: path("M2 5.436a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1");
}

.yjs1x0bnf {
  d: path("M6 1.5a1 1 0 0 1 1 1V18a1 1 0 1 1-2 0V2.5a1 1 0 0 1 1-1");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="ntp3e6b6p"/><path class="yjs1x0bnf"/><path class="ondjn8l7f"/></g>`,
		"fallback": "pepicons-pop:peso",
	});
}

export default Component;
