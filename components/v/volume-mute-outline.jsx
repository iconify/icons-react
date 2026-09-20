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
		"content": `<style>.kpm-8qbob {
  fill: currentColor;
  d: path("M7 15V9h4l5-5v16l-5-5zm2-2h2.85L14 15.15v-6.3L11.85 11H9zm2.5-1");
}
</style><path class="kpm-8qbob"/>`,
		"fallback": "material-symbols:volume-mute-outline",
	});
}

export default Component;
