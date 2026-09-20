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
		"content": `<style>.rmkyq5-xg {
  fill: currentColor;
  d: path("m3.4 20.4l-2.3-2.25q-.3-.3-.3-.7t.3-.7q2.2-2.375 5.075-3.562T12 12t5.813 1.188T22.9 16.75q.3.3.3.7t-.3.7l-2.3 2.25q-.275.275-.638.3t-.662-.2l-2.9-2.2q-.2-.15-.3-.35t-.1-.45v-2.85q-.95-.3-1.95-.475T12 14t-2.05.175T8 14.65v2.85q0 .25-.1.45t-.3.35l-2.9 2.2q-.3.225-.663.2t-.637-.3M11 7V2h2v5zm6.6 2.85L16.2 8.4l3.55-3.55l1.4 1.45zm-11.2 0L2.85 6.3l1.4-1.45L7.8 8.4z");
}
</style><path class="rmkyq5-xg"/>`,
		"fallback": "material-symbols:ring-volume",
	});
}

export default Component;
