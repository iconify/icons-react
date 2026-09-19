import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lh8eyg1vb.css';
import '../../css/i/i061d9bsi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lh8eyg1vb"/><path class="i061d9bsi"/></g>`,
		"fallback": "devicon:unrealengine-wordmark",
	});
}

export default Component;
