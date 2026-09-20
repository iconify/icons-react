import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrw7wvbmf.css';
import '../../css/g/ggerixkil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qrw7wvbmf"/><path class="ggerixkil"/></g>`,
		"fallback": "streamline-freehand-color:messages-people-user-bubble",
	});
}

export default Component;
