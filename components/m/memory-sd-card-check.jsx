import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fnj-t_blw.css';
import '../../css/p/pe5-nx9op.css';
import '../../css/z/zk27gtbyf.css';
import '../../css/q/qvs2fhg4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fnj-t_blw"/><path class="pe5-nx9op"/><path class="zk27gtbyf"/><path class="qvs2fhg4n"/></g>`,
		"fallback": "streamline-freehand-color:memory-sd-card-check",
	});
}

export default Component;
