import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mj8nk2bxp {
  fill: currentColor;
  d: path("M4.754 4H23.25a2.75 2.75 0 0 1 2.45 1.5H2.304A2.75 2.75 0 0 1 4.754 4m5.002 6H2.004V8.5h8.642a4.5 4.5 0 0 0-.89 1.5m.097 3.25h-7.85v1.5h8.885a4.5 4.5 0 0 1-1.035-1.5m7.26 1.5a4.5 4.5 0 0 0 1.034-1.5H26v1.5zM7.04 18H2.004v1.5H7v-1q0-.255.041-.5M7 22.5H2.304A2.75 2.75 0 0 0 4.735 24H7zM21 24h2.269a2.75 2.75 0 0 0 2.432-1.5H21zm0-4.5h5V18h-5.041q.04.245.041.5zM18.244 10a4.5 4.5 0 0 0-.89-1.5H26V10zM9.5 18.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5V24H20v-5.5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2V24h1.5zm1-7a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m3.5-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><path class="mj8nk2bxp"/>`,
		"fallback": "fluent:video-background-effect-horizontal-28-regular",
	});
}

export default Component;
