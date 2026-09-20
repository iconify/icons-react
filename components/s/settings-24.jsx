import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdtx07bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdtx07bbd"/>`,
		"fallback": "octicon:settings-24",
	});
}

export default Component;
