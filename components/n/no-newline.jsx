import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2z21lbyl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2z21lbyl"/>`,
		"fallback": "octicon:no-newline",
	});
}

export default Component;
