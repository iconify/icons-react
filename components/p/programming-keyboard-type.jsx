import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qz7834b2q.css';
import '../../css/y/yyuotdb-q.css';
import '../../css/w/wt7ssrb3a.css';
import '../../css/i/i1_0w0bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qz7834b2q"/><path class="yyuotdb-q"/><path class="wt7ssrb3a"/><path class="i1_0w0bcy"/></g>`,
		"fallback": "streamline-freehand:programming-keyboard-type",
	});
}

export default Component;
