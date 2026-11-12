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
		"content": `<style>.qe4ax-bpb {
  fill: currentColor;
  d: path("M9 2h6a5 5 0 0 1 5 5v4h1a1 1 0 0 1 0 2h-1v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5v-4H3a1 1 0 0 1 0-2h1V7a5 5 0 0 1 5-5m2.419 4.043a10 10 0 0 0-.695.555q-.79.676-1.477 1.458C8.015 9.464 7 11.222 7 13.143a5 5 0 0 0 10 0c0-1.003-.284-1.982-.73-2.875c-.704-1.409-1.801-2.647-2.992-3.668a10 10 0 0 0-.697-.556a1 1 0 0 0-1.162-.001");
}
</style><path class="qe4ax-bpb"/>`,
		"fallback": "coolicons:meter-water-fill-round",
	});
}

export default Component;
