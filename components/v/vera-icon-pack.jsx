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
		"content": `<style>.o_c879bbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.006 40.056a5.94 5.94 0 0 1-5.056-2.81L6.395 17.025a5.944 5.944 0 1 1 10.1-6.271l12.555 20.22a5.944 5.944 0 0 1-5.044 9.081Z");
}

.smfg6hxob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 22.841l7.505-12.087a5.945 5.945 0 0 1 10.1 6.271L29.05 37.245a5.94 5.94 0 0 1-5.056 2.81");
}

.zfojy0i0y {
  cx: 36.554px;
  cy: 13.89px;
  r: 5.944px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="o_c879bbd"/><path class="smfg6hxob"/><circle class="zfojy0i0y"/>`,
		"fallback": "arcticons:vera-icon-pack",
	});
}

export default Component;
