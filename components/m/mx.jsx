import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mukfgmbez.css';
import '../../css/y/ynttdhfug.css';
import '../../css/p/p9bu9v51v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mukfgmbez"/><path class="ynttdhfug"/><path class="p9bu9v51v"/>`,
		"fallback": "token:mx",
	});
}

export default Component;
