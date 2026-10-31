import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w8w0fkz_u.css';
import '../../css/y/ylhff9aue.css';
import '../../css/d/d060scbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="w8w0fkz_u"/><circle class="ylhff9aue"/><path class="d060scbyl"/></g>`,
		"fallback": "struq:support",
	});
}

export default Component;
