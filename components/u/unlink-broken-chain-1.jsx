import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yesadmaat.css';
import '../../css/c/cs33m3b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yesadmaat"/><path class="cs33m3b5z"/></g>`,
		"fallback": "streamline-freehand:unlink-broken-chain-1",
	});
}

export default Component;
