import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pra9yqb_a.css';
import '../../css/h/hu1yjobuk.css';
import '../../css/g/g_-f5xbnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pra9yqb_a"/><path class="hu1yjobuk"/><path class="g_-f5xbnn"/></g>`,
		"fallback": "streamline-freehand-color:voice-id-approved",
	});
}

export default Component;
