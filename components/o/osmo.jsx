import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alpdh2bhl.css';
import '../../css/y/yxcnnz2ag.css';
import '../../css/f/f58fyn0yo.css';
import '../../css/g/gj_9rjb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="alpdh2bhl"/><path class="yxcnnz2ag"/><path clip-rule="evenodd" class="f58fyn0yo"/><path class="gj_9rjb8q"/>`,
		"fallback": "token:osmo",
	});
}

export default Component;
