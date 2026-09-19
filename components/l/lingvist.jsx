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
		"content": `<style>.z9-rgybaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 12.5v23m19-23.5l20 11.986m0 .068l-20 11.947m-1.284-10.674L4.5 36");
}
</style><path class="z9-rgybaa"/>`,
		"fallback": "arcticons:lingvist",
	});
}

export default Component;
