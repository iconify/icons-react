import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cfzz4kqwt.css';
import '../../css/i/ir05u4o-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cfzz4kqwt"/><path class="ir05u4o-a"/></g>`,
		"fallback": "stash:mailbox-empty",
	});
}

export default Component;
