import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf4d68l2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf4d68l2j"/>`,
		"fallback": "thesvg-color:polywork",
	});
}

export default Component;
