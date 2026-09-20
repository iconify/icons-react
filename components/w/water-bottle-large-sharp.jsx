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
		"content": `<style>.xzwn_tody {
  fill: currentColor;
  d: path("M5.885 21.116v-4.808h2v-5.616h-2V5.885h4.807V4.5h-1v-1h4.616v1h-1v1.385h4.808v4.807h-2v5.616h2v4.808z");
}
</style><path class="xzwn_tody"/>`,
		"fallback": "material-symbols-light:water-bottle-large-sharp",
	});
}

export default Component;
