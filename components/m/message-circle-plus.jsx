import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wisvy48og.css';
import '../../css/q/qdy6glmmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wisvy48og"/><path class="qdy6glmmj"/></g>`,
		"fallback": "withicons-bauhaus:message-circle-plus",
	});
}

export default Component;
