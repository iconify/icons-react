import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e96rvjj3x {
  d: path("m31.616 13.799l2.585 2.585a1.02 1.02 0 0 1-.012 1.455l-2.467 2.373l-3.934-3.934l2.373-2.467a1.02 1.02 0 0 1 1.455-.012Z");
}

.g8c9o7bqu {
  d: path("M13.5 34.5v-3.934l14.288-14.288l3.934 3.934L17.434 34.5z");
}

.j25z1hbhu {
  stroke-linecap: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}

.to-5kdesz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
}
</style><g class="to-5kdesz"><path class="e96rvjj3x"/><path class="g8c9o7bqu"/><path class="j25z1hbhu"/></g>`,
		"fallback": "arcticons:vectorifydahome",
	});
}

export default Component;
