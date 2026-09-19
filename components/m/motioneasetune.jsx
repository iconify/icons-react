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
		"content": `<style>.zlpn6ebcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.076 20.528v6.944m-7.53-14.559V35.39M23.966 5.5v37m-7.411-29.587V35.39M8.924 20.528v6.944");
}
</style><path class="zlpn6ebcc"/>`,
		"fallback": "arcticons:motioneasetune",
	});
}

export default Component;
