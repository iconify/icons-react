import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqzqczbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqzqczbmv"/>`,
		"fallback": "ri:paint-brush-line",
	});
}

export default Component;
