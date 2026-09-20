import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uicc9ebcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uicc9ebcx"/>`,
		"fallback": "simple-icons:puma",
	});
}

export default Component;
