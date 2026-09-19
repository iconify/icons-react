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
		"content": `<style>.daatkyg2a {
  fill: currentColor;
  d: path("M16 7.08c0 1.77-.84 3.25-2 3.82V21h-2V10.9c-1.16-.57-2-2.05-2-3.82C10.01 4.83 11.35 3 13 3c1.66 0 3 1.83 3 4.08M17 3v18h2v-8h2V7c0-1.76-1.24-4-4-4M8.28 3h-.72v4h-.84V3H5.28v4h-.84V3H3v8h2v10h2V11h2V3z");
}
</style><path class="daatkyg2a"/>`,
		"fallback": "ic:sharp-flatware",
	});
}

export default Component;
