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
		"content": `<style>.vncpgj1bh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 23.422L15.009 35.31l17.495-22.62M15.496 23.422L26.005 35.31L43.5 12.69");
}
</style><path class="vncpgj1bh"/>`,
		"fallback": "arcticons:todark",
	});
}

export default Component;
