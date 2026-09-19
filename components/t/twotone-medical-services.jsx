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
		"content": `<style>.ic-f6qblm {
  fill: currentColor;
  d: path("M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M10 4h4v2h-4zm10 16H4V8h16z");
}

.skgek41fj {
  fill: currentColor;
  d: path("M4 20h16V8H4zm4-7h3v-3h2v3h3v2h-3v3h-2v-3H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.urt0y3b0l {
  fill: currentColor;
  d: path("M11 18h2v-3h3v-2h-3v-3h-2v3H8v2h3z");
}
</style><path class="skgek41fj"/><path class="ic-f6qblm"/><path class="urt0y3b0l"/>`,
		"fallback": "ic:twotone-medical-services",
	});
}

export default Component;
