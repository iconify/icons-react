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
		"content": `<style>.k9j9kmi4o {
  stroke-opacity: 0.4;
  d: path("M20 18a4.472 4.472 0 0 1-8 0m0 3v-3h3m-3-4a4.472 4.472 0 0 1 8 0m0-3v3h-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w367kgbrm {
  d: path("M8 9a2.828 2.828 0 1 0-4 4a2.828 2.828 0 0 0 4-4m0 0l6-6m-2.128 2.129l2 2M13 4l2 2");
}
</style><g class="nrj6p8qat"><path class="k9j9kmi4o"/><path class="w367kgbrm"/></g>`,
		"fallback": "coolicons:key-sync-corner-duocolor-round",
	});
}

export default Component;
