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
		"content": `<style>.fnh_fzb7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 39.114l14.25-14.25a1.22 1.22 0 0 0 0-1.728l-14.25-14.25a1.22 1.22 0 0 0-1.728 0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}

.sw6lz3bwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 43.142l14.25-14.25a1.22 1.22 0 0 0 0-1.728l-14.25-14.25a1.22 1.22 0 0 0-1.728 0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}

.zc7p01b2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.864 35.086l14.25-14.25a1.22 1.22 0 0 0 0-1.728l-14.25-14.25a1.22 1.22 0 0 0-1.728 0l-14.25 14.25a1.22 1.22 0 0 0 0 1.728l14.25 14.25a1.22 1.22 0 0 0 1.728 0");
}
</style><path class="fnh_fzb7o"/><path class="sw6lz3bwh"/><path class="zc7p01b2v"/>`,
		"fallback": "arcticons:librephotosmobile",
	});
}

export default Component;
