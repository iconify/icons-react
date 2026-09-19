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
		"content": `<style>.d7zdpfsnh {
  d: path("M42.33 24H5.67M24 5.67v36.66m-12.48-5.928V30.24l3.12 6.24l3.12-6.24v6.24m-6.24-18.798V11.52l3.12 6.24l3.12-6.24v6.24m14.04-3.12h2.106m1.014 3.12H31.8v-6.24h3.12M31.8 33.36h2.106m1.014 3.12H31.8v-6.24h3.12");
}

.jlyultbfy {
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="d7zdpfsnh"/><path class="jlyultbfy"/></g>`,
		"fallback": "arcticons:meme",
	});
}

export default Component;
