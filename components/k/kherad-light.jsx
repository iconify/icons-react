import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxgn3kbue.css';
import '../../css/h/h-c75yrdf.css';
import '../../css/g/g953mjzjb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxgn3kbue"/><path class="h-c75yrdf"/><path class="g953mjzjb"/>`,
		"fallback": "selfhst:kherad-light",
	});
}

export default Component;
