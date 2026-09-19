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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rppa58btm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.573 34.358l3.653-20.716m3.576 20.716l3.653-20.716M16.693 28.38h13.069m-11.524-8.76h13.069");
}
</style><path class="rppa58btm"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:symbol-hashtag",
	});
}

export default Component;
