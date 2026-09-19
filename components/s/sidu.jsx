import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj-dsql_l.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj-dsql_l"/>`,
		"fallback": "whh:sidu",
	});
}

export default Component;
