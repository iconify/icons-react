import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otnv16btc.css';
import '../../css/a/aagla3kgr.css';
import '../../css/m/mmkzhsffi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otnv16btc"/><path class="aagla3kgr"/><path class="mmkzhsffi"/>`,
		"fallback": "streamline-freehand:smiley-rich",
	});
}

export default Component;
