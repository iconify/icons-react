import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c4fd7c4ke.css';
import '../../css/o/og1ml-1pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c4fd7c4ke"/><path class="og1ml-1pj"/></g>`,
		"fallback": "reicon:passport2",
	});
}

export default Component;
