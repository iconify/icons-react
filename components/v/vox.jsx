import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqz78abfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqz78abfb"/>`,
		"fallback": "thesvg-color:vox",
	});
}

export default Component;
