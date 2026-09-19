import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p38alfs4h.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p38alfs4h"/>`,
		"fallback": "whh:projectcompare",
	});
}

export default Component;
