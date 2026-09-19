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
		"content": `<style>.ix-02ms1b {
  cx: 24px;
  cy: 24px;
  r: 5.174px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lezi3zb9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 10.994c-8.788 0-16.32 5.37-19.5 13.006C7.68 31.636 15.212 37.006 24 37.006S40.32 31.636 43.5 24C40.32 16.364 32.788 10.994 24 10.994");
}

.vl9engx2a {
  cx: 24px;
  cy: 24px;
  r: 9.207px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ix-02ms1b"/><circle class="vl9engx2a"/><path class="lezi3zb9m"/>`,
		"fallback": "arcticons:nmap-wrapper",
	});
}

export default Component;
