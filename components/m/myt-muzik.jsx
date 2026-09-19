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
		"content": `<style>.ev4i4mfxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 26.775l7.888-11.539l10.021 11.11m3.182-4.911l10.021 11.11L43.5 21.006");
}

.kydc9usyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.014 21.995l10.022 11.11l11.782-18.21l10.16 11.263");
}
</style><path class="ev4i4mfxc"/><path class="kydc9usyv"/>`,
		"fallback": "arcticons:myt-muzik",
	});
}

export default Component;
