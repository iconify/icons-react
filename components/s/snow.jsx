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
		"content": `<style>.e2o56e_bk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.247 34.25h11.835L24 24H12.164ZM35.836 24H24l5.918 10.25h11.836Z");
}

.g6v_dbcll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.754 13.75H29.918L24 24h11.836ZM12.164 24H24l-5.918-10.25H6.247ZM24 44.5l5.918-10.25L24 24l-5.918 10.25Z");
}

.hcwfxodhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 3.5l-5.918 10.25L24 24l5.918-10.25Z");
}
</style><path class="hcwfxodhe"/><path class="g6v_dbcll"/><path class="e2o56e_bk"/>`,
		"fallback": "arcticons:snow",
	});
}

export default Component;
