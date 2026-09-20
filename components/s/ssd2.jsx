import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lnk4wrb-q.css';
import '../../css/s/smi2dz-ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lnk4wrb-q"/><path class="smi2dz-ue"/></g>`,
		"fallback": "reicon:ssd2",
	});
}

export default Component;
