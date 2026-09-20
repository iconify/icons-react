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
		"content": `<style>.vc1nebbpk {
  fill: currentColor;
  d: path("m20.45 23.3l-3.3-3.3H2V4h2v2.85L.65 3.5l1.425-1.425l19.8 19.8zM4 18h11.15l-10-10H4zm18 1.15l-2-2V8h-9.15l-4-4H22z");
}
</style><path class="vc1nebbpk"/>`,
		"fallback": "material-symbols:web-asset-off-outline-sharp",
	});
}

export default Component;
