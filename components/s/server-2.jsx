import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m9h8nyf8o.css';
import '../../css/g/gxvallb2k.css';
import '../../css/n/nohfypbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m9h8nyf8o"/><path class="gxvallb2k"/><path class="nohfypbva"/></g>`,
		"fallback": "streamline-freehand-color:server-2",
	});
}

export default Component;
