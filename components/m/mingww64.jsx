import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xism68mgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xism68mgb"/>`,
		"fallback": "simple-icons:mingww64",
	});
}

export default Component;
