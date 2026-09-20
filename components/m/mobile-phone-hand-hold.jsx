import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tz08rvbow.css';
import '../../css/h/hz5kyiboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tz08rvbow"/><path class="hz5kyiboo"/></g>`,
		"fallback": "streamline-freehand-color:mobile-phone-hand-hold",
	});
}

export default Component;
