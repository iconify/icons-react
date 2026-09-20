import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b75e_lodc.css';
import '../../css/b/bde9dkbcy.css';
import '../../css/o/o0e_e_brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b75e_lodc"/><path class="bde9dkbcy"/><path class="o0e_e_brz"/></g>`,
		"fallback": "streamline-freehand-color:video-meeting-camera-browser",
	});
}

export default Component;
