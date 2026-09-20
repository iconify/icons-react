import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzmj9hbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yzmj9hbiv"/>`,
		"fallback": "reicon:square-arrow-left-down",
	});
}

export default Component;
