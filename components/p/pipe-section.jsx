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
		"content": `<style>.z-hckhe8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 2V10C20 15.5228 15.5228 20 10 20H2M13 2V10C13 11.6569 11.6569 13 10 13H2M6 22V11M22 6H11");
}
</style><path class="z-hckhe8j"/>`,
		"fallback": "keyline-icons:pipe-section",
	});
}

export default Component;
