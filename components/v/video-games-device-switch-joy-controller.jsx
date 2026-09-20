import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lcc-540fa.css';
import '../../css/i/ihlkrjbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lcc-540fa"/><path class="ihlkrjbpu"/></g>`,
		"fallback": "streamline-freehand:video-games-device-switch-joy-controller",
	});
}

export default Component;
