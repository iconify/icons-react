import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqgwv0bzt.css';
import '../../css/y/yi6ar83pn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqgwv0bzt"/><path class="yi6ar83pn"/>`,
		"fallback": "ep:suitcase",
	});
}

export default Component;
