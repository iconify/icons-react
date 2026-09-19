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
		"content": `<style>.s_iq-8b0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.9 27.7v7.4h7.4V12.9h-7.4v7.4h22.2v-7.4h-7.4v22.2h7.4v-7.4z");
}

.z_ed2rbzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.9 5.5l-7.4 7.4v22.2l7.4 7.4h22.2l7.4-7.4V12.9l-7.4-7.4z");
}
</style><path class="z_ed2rbzq"/><path class="s_iq-8b0w"/>`,
		"fallback": "arcticons:torrent-power",
	});
}

export default Component;
