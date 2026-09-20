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
		"content": `<style>.unc338b-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.94 9.44a3.1 3.1 0 0 0-3.1 3.1v1l-.41.42a21 21 0 0 1-9.33 5.6l-.48.15v.5a21 21 0 0 0 1.75 11a15.18 15.18 0 0 0 8.35 7.26l.27.1l.27-.1a15.17 15.17 0 0 0 8.36-7.26H40.4a3.12 3.12 0 0 0 3.1-3.1V12.54a3.11 3.11 0 0 0-3.1-3.1Zm7.46 13.28c0-.21-.06-2.3-.07-2.51v-.5l-.49-.15a24.1 24.1 0 0 1-10-6.07m8.76 17.67a19.26 19.26 0 0 0 1.8-8.44m-4.68.22l-6.6 6.72L10.18 26m30.65-13.46L29.17 19.7m0 0l-11.66-7.16");
}
</style><path class="unc338b-g"/>`,
		"fallback": "arcticons:simplelogin",
	});
}

export default Component;
