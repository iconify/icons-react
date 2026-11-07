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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gqjs11iml {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 17a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}

.wccpv2b4q {
  d: path("M11 17V8c0-.633.184-1.247.536-1.774a3.44 3.44 0 0 1 1.328-1.154c1.126-.563 2.463-.526 3.583.034l2 1a1 1 0 1 1-.894 1.788l-2-1a2.1 2.1 0 0 0-.951-.228C13.829 6.668 13 7.148 13 8v.382l3.447 1.724a1 1 0 1 1-.894 1.788L13 10.618V17a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="gqjs11iml"/><path class="wccpv2b4q"/></g>`,
		"fallback": "coolicons:music-note-double-bulk-round",
	});
}

export default Component;
