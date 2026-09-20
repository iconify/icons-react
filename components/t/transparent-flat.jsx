import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mchngqmzs.css';
import '../../css/p/pex3ovbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mchngqmzs"/><path clip-rule="evenodd" class="pex3ovbld"/></g>`,
		"fallback": "streamline-sharp-color:transparent-flat",
	});
}

export default Component;
