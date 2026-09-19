import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uukvtj_ct.css';
import '../../css/f/f0n46xbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uukvtj_ct"/><path class="f0n46xbnb"/>`,
		"fallback": "circum:square-check",
	});
}

export default Component;
