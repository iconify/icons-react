import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d15_2pb5h.css';
import '../../css/g/gnfv7ibas.css';
import '../../css/q/qevel6bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d15_2pb5h"/><path class="gnfv7ibas"/><path class="qevel6bmp"/></g>`,
		"fallback": "streamline-freehand-color:microphone",
	});
}

export default Component;
