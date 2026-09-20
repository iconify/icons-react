import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhgrmca3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhgrmca3n"/>`,
		"fallback": "thesvg-color:mobx-state-tree",
	});
}

export default Component;
