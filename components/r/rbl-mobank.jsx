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
		"content": `<style>.cszj6s62f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 4.5v39h6v-4.297A14.5 14.5 0 0 0 24 42c8.008 0 14.5-6.492 14.5-14.5c-.002-7.62-5.9-13.938-13.502-14.463v6.024a8.5 8.5 0 1 1-1.996 0v-6.018a14.5 14.5 0 0 0-7.502 2.754V4.5zm6 39v-16");
}

.gc8zzwb5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 27.541a14.5 14.5 0 0 1 10.747-14.006");
}
</style><path class="gc8zzwb5e"/><path class="cszj6s62f"/>`,
		"fallback": "arcticons:rbl-mobank",
	});
}

export default Component;
