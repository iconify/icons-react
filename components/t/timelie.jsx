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
		"content": `<style>.dey00kd_q {
  cx: 20.506px;
  cy: 20px;
  r: 0.75px;
  fill: currentColor;
}

.gh_xr2bws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.506 14v20l17-10zm0 0l8.87 14.783m-.001-9.566L14.505 34m17.001-10h-17");
}

.hg2r4ybgt {
  cx: 20.506px;
  cy: 28px;
  r: 0.75px;
  fill: currentColor;
}

.monwjgsfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.506 6v36l30.988-18z");
}
</style><path class="monwjgsfi"/><path class="gh_xr2bws"/><circle class="dey00kd_q"/><circle class="hg2r4ybgt"/>`,
		"fallback": "arcticons:timelie",
	});
}

export default Component;
