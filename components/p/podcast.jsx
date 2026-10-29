import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6l-9rbeg.css';
import '../../css/h/hfczz8xtc.css';
import '../../css/z/z8ajtfwob.css';
import '../../css/v/vmomwybeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6l-9rbeg wm-a"/><path class="hfczz8xtc wm-a"/><path class="wm-k z8ajtfwob"/><path class="vmomwybeh wm-k"/>`,
		"fallback": "withicons-bauhaus:podcast",
	});
}

export default Component;
