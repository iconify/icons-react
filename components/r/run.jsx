import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aovzl8biz.css';
import '../../css/o/oj1pjebiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="aovzl8biz"/><path class="oj1pjebiy"/>`,
		"fallback": "bx:run",
	});
}

export default Component;
