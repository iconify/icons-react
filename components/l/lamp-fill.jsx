import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8c4lps6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q8c4lps6m"/>`,
		"fallback": "lets-icons:lamp-fill",
	});
}

export default Component;
