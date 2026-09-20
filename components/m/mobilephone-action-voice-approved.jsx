import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rpjys_o5s.css';
import '../../css/u/u0vw5sb0i.css';
import '../../css/w/we7ulucfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rpjys_o5s"/><path class="u0vw5sb0i"/><path class="we7ulucfs"/></g>`,
		"fallback": "streamline-freehand-color:mobilephone-action-voice-approved",
	});
}

export default Component;
