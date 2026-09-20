import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/ctzf_3bwk.css';
import '../../css/b/b1f8dbbnj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ctzf_3bwk"/><path class="b1f8dbbnj"/></g>`,
		"fallback": "pepicons-pencil:triangle-left-filled",
	});
}

export default Component;
