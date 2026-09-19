import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbk7628lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gbk7628lt"/>`,
		"fallback": "iconamoon:mouse-fill",
	});
}

export default Component;
