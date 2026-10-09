import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvg3fbb0b.css';
import '../../css/l/l7hgfejkj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvg3fbb0b"/><path class="l7hgfejkj"/>`,
		"fallback": "energy-icons:reply-48-bold",
	});
}

export default Component;
