import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs2yn_btv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs2yn_btv"/>`,
		"fallback": "la:venus-solid",
	});
}

export default Component;
