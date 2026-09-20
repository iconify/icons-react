import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qut0n4lgk.css';
import '../../css/b/b7de_v4rg.css';
import '../../css/x/xwi9-ibln.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qut0n4lgk"/><path class="b7de_v4rg"/><path class="xwi9-ibln"/></g>`,
		"fallback": "pepicons-pencil:studio-light-side",
	});
}

export default Component;
