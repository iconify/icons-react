import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qoh9i_b1g.css';
import '../../css/h/ham1s0bpn.css';
import '../../css/c/cdbmygnqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qoh9i_b1g"/><path class="ham1s0bpn"/><path class="cdbmygnqf"/></g>`,
		"fallback": "streamline-freehand:notes-quill",
	});
}

export default Component;
