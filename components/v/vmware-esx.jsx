import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgzsz4bdl.css';
import '../../css/l/l65istbut.css';
import '../../css/f/fufcd88mx.css';
import '../../css/y/y_20o_7ht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgzsz4bdl"/><path class="l65istbut"/><path class="fufcd88mx"/><path class="y_20o_7ht"/>`,
		"fallback": "selfhst:vmware-esx",
	});
}

export default Component;
