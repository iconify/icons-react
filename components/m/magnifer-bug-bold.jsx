import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v2xfabcfj.css';
import '../../css/q/qiyg78b-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v2xfabcfj"/><path class="qiyg78b-a"/></g>`,
		"fallback": "solar:magnifer-bug-bold",
	});
}

export default Component;
