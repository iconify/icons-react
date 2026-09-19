import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d-_q3_v1f {
  fill: currentColor;
  d: path("M21 6h-3V3h-2v3h-3v2h3v3h2V8h3zm0 9.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z");
}
</style><path class="d-_q3_v1f"/>`,
		"fallback": "ic:sharp-add-ic-call",
	});
}

export default Component;
