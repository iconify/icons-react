import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gd19j4ann.css';
import '../../css/s/sj2q25bal.css';
import '../../css/h/hxl93l8oj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gd19j4ann"/><path class="sj2q25bal"/><path class="hxl93l8oj"/></g>`,
		"fallback": "pepicons:studio-light-side",
	});
}

export default Component;
