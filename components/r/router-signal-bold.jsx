import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izn2dcbwr.css';
import '../../css/a/au2mywbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izn2dcbwr"/><path class="au2mywbxn"/>`,
		"fallback": "streamline-ultimate:router-signal-bold",
	});
}

export default Component;
