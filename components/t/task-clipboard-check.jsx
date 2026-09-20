import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g5h1v8b-m.css';
import '../../css/n/nxc97uq5g.css';
import '../../css/b/bny-iu66i.css';
import '../../css/v/vkezfyhjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g5h1v8b-m"/><path class="nxc97uq5g"/><path class="bny-iu66i"/><path class="vkezfyhjx"/></g>`,
		"fallback": "streamline-freehand-color:task-clipboard-check",
	});
}

export default Component;
