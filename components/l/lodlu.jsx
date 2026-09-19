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
		"content": `<style>.j_9y1ua8y {
  d: path("M4.5 13.976v15.718c0 3.127 2.24 4.28 4.824 4.28h12.54");
}

.ur_a30kni {
  d: path("M15.246 23.671v6.757c0 2.225 2.82 3.545 5.522 3.545h2.98c2.93 0 5.633-2.174 5.633-3.852v-6.636c0-2.263-2.475-4.448-5.349-4.448h-3.653c-2.891 0-5.133 2.21-5.133 4.634m24.638-4.728h-4.982c-3.461 0-5.52 2.184-5.52 4.026v7.224c0 .892.747 3.973 7.062 3.973s7.056-3.673 7.056-4.25V13.834");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="j_9y1ua8y"/><path class="ur_a30kni"/></g>`,
		"fallback": "arcticons:lodlu",
	});
}

export default Component;
