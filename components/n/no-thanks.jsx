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
		"content": `<style>.eo6nvrong {
  d: path("M34.058 29.774c2.512 0 4.105-1.633 4.105-5.774s-1.593-5.774-4.105-5.774s-4.106 1.633-4.106 5.774s1.594 5.774 4.106 5.774");
}

.ofgfcwbwq {
  d: path("M16.32 32.733L9.217 21.61v11.125H4.5V15.267h5.766l7.041 11.077V15.266h4.715v17.467zm23.152.019c2.438-1.49 4.028-5.005 4.028-8.904c0-3.635-1.384-6.96-3.58-8.6H28.196c-2.196 1.64-3.58 4.965-3.58 8.6c0 3.9 1.59 7.414 4.028 8.904z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ofgfcwbwq"/><path class="eo6nvrong"/></g>`,
		"fallback": "arcticons:no-thanks",
	});
}

export default Component;
