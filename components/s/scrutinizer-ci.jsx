import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwuagw5pf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwuagw5pf"/>`,
		"fallback": "thesvg-color:scrutinizer-ci",
	});
}

export default Component;
