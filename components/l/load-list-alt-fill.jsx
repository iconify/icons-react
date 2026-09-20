import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yd480jeeu.css';
import '../../css/t/tzow_ibpm.css';
import '../../css/t/thb97fs7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yd480jeeu"/><path clip-rule="evenodd" class="tzow_ibpm"/><path class="thb97fs7v"/></g>`,
		"fallback": "lets-icons:load-list-alt-fill",
	});
}

export default Component;
