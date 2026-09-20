import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g--ezebfp.css';
import '../../css/a/a8qr8zbfl.css';
import '../../css/d/d8kbcbc-x.css';
import '../../css/a/ad35ldbxn.css';
import '../../css/l/l8hihu8ge.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g--ezebfp"/><path class="a8qr8zbfl"/><path class="d8kbcbc-x"/><path class="ad35ldbxn"/><path class="l8hihu8ge"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:lesbian",
	});
}

export default Component;
