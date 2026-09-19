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
		"content": `<style>.i2xbunbij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 5.697h-33a2 2 0 0 0-2 2v28.68a2 2 0 0 0 2 2h3.656a2.16 2.16 0 0 1 1.527.633l3.293 3.293l3.294-3.293a2.16 2.16 0 0 1 1.527-.633H40.5a2 2 0 0 0 2-2V7.697a2 2 0 0 0-2-2");
}

.xab12132t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.978 32.712a11.41 11.41 0 0 0 12.086-2.61c4.454-4.455 4.454-11.676 0-16.13q-.458-.458-.954-.854m-3.088-1.756a11.41 11.41 0 0 0-12.086 2.61c-4.454 4.454-4.454 11.676 0 16.13q.458.458.954.854");
}

.zzznofbrd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.77 31.419l4.123-.466l-.466-4.123M35.23 12.655l-4.123.466l.466 4.123m-7.946 7.407v-7.407m5.051 8.997l-5.051-1.59");
}
</style><path class="i2xbunbij"/><path class="xab12132t"/><path class="zzznofbrd"/>`,
		"fallback": "arcticons:sms-backup-restore",
	});
}

export default Component;
