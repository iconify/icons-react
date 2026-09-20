import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq1pttxqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq1pttxqb"/>`,
		"fallback": "stash:wand-light",
	});
}

export default Component;
