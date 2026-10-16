import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dinz6tf1u.css';
import '../../css/y/y5-o4cbgb.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dinz6tf1u"/><path class="y5-o4cbgb"/>`,
		"fallback": "thesvg-color:super-productivity",
	});
}

export default Component;
