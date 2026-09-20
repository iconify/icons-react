import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbbo_dbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbbo_dbgb"/>`,
		"fallback": "simple-icons:spoj",
	});
}

export default Component;
