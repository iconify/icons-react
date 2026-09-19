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
		"content": `<style>.a1l0xobpe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5a37 37 0 0 1 37 37");
}

.hs7ownb2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 18.282A24.22 24.22 0 0 1 29.718 42.5");
}

.ivluulbog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.318 42.5A16.82 16.82 0 0 0 5.5 25.682v-7.4");
}

.mbdnqdbsp {
  fill: none;
  stroke: currentColor;
  d: path("M5.5 13.573V5.5m16.818 37h7.4m4.709 0H42.5");
}

.st5vxbc2t {
  cx: 10.246px;
  cy: 37.755px;
  r: 4.745px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t-qgazb6d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 13.573A28.927 28.927 0 0 1 34.427 42.5");
}
</style><path class="t-qgazb6d"/><path class="a1l0xobpe"/><path class="hs7ownb2l"/><path class="ivluulbog"/><path class="mbdnqdbsp"/><circle class="st5vxbc2t"/>`,
		"fallback": "arcticons:rssreader",
	});
}

export default Component;
