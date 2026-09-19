import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iv_s458to {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.973 37.872l-18.5 4.299L5.5 28.299l5.527-18.171l18.5-4.299L42.5 19.701ZM14.69 18.605l18.43 11.058m-18.43 0l18.43-11.058");
}
</style><path class="iv_s458to"/>`,
		"fallback": "arcticons:pareudepararme",
	});
}

export default Component;
