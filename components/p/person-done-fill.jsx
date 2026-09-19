import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvc5-zbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvc5-zbql"/>`,
		"fallback": "eva:person-done-fill",
	});
}

export default Component;
