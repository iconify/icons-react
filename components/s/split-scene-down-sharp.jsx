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
		"content": `<style>.ccb2iyuxs {
  fill: currentColor;
  d: path("M5 9.116V4h14v5.116zM5 20v-7.5H3v-1h18v1h-2V20z");
}
</style><path class="ccb2iyuxs"/>`,
		"fallback": "material-symbols-light:split-scene-down-sharp",
	});
}

export default Component;
