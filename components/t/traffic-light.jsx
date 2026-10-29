import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hkh54t9yf.css';
import '../../css/c/cf2fsfsjn.css';
import '../../css/b/b74qgjb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hkh54t9yf"/><path class="cf2fsfsjn"/><path class="b74qgjb-s"/></g>`,
		"fallback": "withicons-bauhaus:traffic-light",
	});
}

export default Component;
