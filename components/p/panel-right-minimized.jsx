import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-if0tu1z.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzt0bcbrc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGuE6JWy7V" class="q-if0tu1z"/></defs><mask id="SVGWRTFuega" class="cuyn6tgcc"><use href="#SVGuE6JWy7V"/></mask><g class="cuyn6tgcc"><use href="#SVGuE6JWy7V"/><path mask="url(#SVGWRTFuega)" class="bzt0bcbrc"/></g>`,
		"fallback": "radix-icons:panel-right-minimized",
	});
}

export default Component;
