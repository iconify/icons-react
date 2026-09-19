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

.uk_-kpbdx {
  cx: 26.111px;
  cy: 20.73px;
  r: 9.73px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.up03khmnw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.16 20.73V37m19.46-16.27c0 5.374-4.356 9.73-9.73 9.73s-9.73-4.356-9.73-9.73S16.517 11 21.89 11s9.73 4.356 9.73 9.73");
}
</style><circle class="cpk0fnbgt"/><path class="up03khmnw"/><circle class="uk_-kpbdx"/>`,
		"fallback": "arcticons:pazarama",
	});
}

export default Component;
