import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qy18ibbdz.css';
import '../../css/z/zqm8b10ky.css';
import '../../css/u/ukbom9bgh.css';
import '../../css/q/q3px6mbyf.css';
import '../../css/j/jfn1n2iby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qy18ibbdz wm-shadow"/><path class="wm-shadow zqm8b10ky"/><path class="ukbom9bgh"/><path class="q3px6mbyf"/><path class="jfn1n2iby"/></g>`,
		"fallback": "withicons-brutal:paw-print",
	});
}

export default Component;
