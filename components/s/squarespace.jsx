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
		"content": `<style>.chq4h0blj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.512 15.805L15.805 27.512a6.622 6.622 0 1 1-9.365-9.365l9.365-9.366");
}

.rnlxpipfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.488 32.195l11.707-11.707a6.622 6.622 0 1 1 9.365 9.365l-9.365 9.366m-21.073-16.39L22.83 11.122a6.62 6.62 0 0 1 9.365 0");
}

.x88q16b4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.878 25.171L25.17 36.878a6.62 6.62 0 0 1-9.365 0");
}
</style><path class="x88q16b4j"/><path class="rnlxpipfq"/><path class="chq4h0blj"/>`,
		"fallback": "arcticons:squarespace",
	});
}

export default Component;
