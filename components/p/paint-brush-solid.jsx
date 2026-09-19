import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im8s7jxin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="im8s7jxin"/>`,
		"fallback": "heroicons:paint-brush-solid",
	});
}

export default Component;
