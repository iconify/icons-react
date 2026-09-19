import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwps5fmjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bwps5fmjq"/>`,
		"fallback": "iconoir:page-down-solid",
	});
}

export default Component;
