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
		"content": `<style>.x5b306btp {
  fill: currentColor;
  d: path("M4 12a8 8 0 0 0 7.492 7.984a6.5 6.5 0 0 0 1.289 1.986Q12.394 22 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q0 .395-.03.78a6.5 6.5 0 0 0-1.986-1.288A8 8 0 0 0 4 12m7.194 3.919a4.001 4.001 0 1 1 4.725-4.725a6.5 6.5 0 0 1 2-.18A6.002 6.002 0 0 0 6 12a6 6 0 0 0 5.013 5.92a6.6 6.6 0 0 1 .18-2.001m.828-1.92L12 14a2 2 0 1 1 2-2v.022A6.5 6.5 0 0 0 12.022 14m5.478-2a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m.501 8.503V18h2.502a.5.5 0 1 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1h2.505v2.503a.5.5 0 1 0 1 0");
}
</style><path class="x5b306btp"/>`,
		"fallback": "fluent:target-add-24-filled",
	});
}

export default Component;
