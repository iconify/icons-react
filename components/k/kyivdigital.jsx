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
		"content": `<style>.btj9ltr1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31 28.92l-12.724-9L31 10.98m-12.724 8.94H17");
}

.ssdnkevch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.013 33.553L24.027 43.5l-17.04-9.947V4.5h34.026zM17 10.92v18");
}
</style><path class="ssdnkevch"/><path class="btj9ltr1g"/>`,
		"fallback": "arcticons:kyivdigital",
	});
}

export default Component;
