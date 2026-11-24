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
		"content": `<style>.fq_fmubqs {
  fill: currentColor;
  d: path("M15 22v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H3a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v17h1a1 1 0 0 1 0 2ZM12.894 5.953a.998.998 0 0 0-1.788 0l-.966 1.931l-2.281.326a1.001 1.001 0 0 0-.566 1.697l1.636 1.636l-.315 1.893a1 1 0 0 0 .392.968a1 1 0 0 0 1.041.09L12 13.518l1.953.976a1 1 0 0 0 1.041-.09a1 1 0 0 0 .392-.968l-.315-1.893l1.636-1.636a1.001 1.001 0 0 0-.566-1.697l-2.281-.326ZM11 22v-4h2v4Z");
}
</style><path class="fq_fmubqs"/>`,
		"fallback": "coolicons:police-station-fill-sharp",
	});
}

export default Component;
