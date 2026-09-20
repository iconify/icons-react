import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f65h7_qtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f65h7_qtz"/>`,
		"fallback": "octicon:pencil-24",
	});
}

export default Component;
