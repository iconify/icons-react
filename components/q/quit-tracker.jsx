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
		"content": `<style>.v3wi5e3zy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.646 26.848c.807-11.148 13.788.912 15.551-17.806");
}

.wmg_3zzyd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 31.223h5.395v7.792H4.5zm9.629 0H43.5v7.792H14.129zm-9.553-4.356c3.316-16.68 14.68-1.68 15.934-17.882");
}
</style><path class="wmg_3zzyd"/><path class="v3wi5e3zy"/>`,
		"fallback": "arcticons:quit-tracker",
	});
}

export default Component;
