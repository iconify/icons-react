import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0b-rzvep.css';
import '../../css/x/xcvr3hbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0b-rzvep"/><path clip-rule="evenodd" class="xcvr3hbxb"/>`,
		"fallback": "lineicons:phone",
	});
}

export default Component;
