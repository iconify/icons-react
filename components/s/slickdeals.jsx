import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r13vadc4w.css';
import '../../css/c/cxb1kbche.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r13vadc4w"/><path class="cxb1kbche"/>`,
		"fallback": "selfhst:slickdeals",
	});
}

export default Component;
