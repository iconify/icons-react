import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfxlm-_7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfxlm-_7k"/>`,
		"fallback": "ri:shining-fill",
	});
}

export default Component;
