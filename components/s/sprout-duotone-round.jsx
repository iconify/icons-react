import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nw41u3ufb.css';
import '../../css/b/b7us8fvra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nw41u3ufb"/><path class="b7us8fvra"/></g>`,
		"fallback": "coolicons:sprout-duotone-round",
	});
}

export default Component;
