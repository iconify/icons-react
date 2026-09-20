import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nr4ijgufc.css';
import '../../css/g/g4im77-fo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nr4ijgufc"/><path class="g4im77-fo"/></g>`,
		"fallback": "streamline-sharp-color:steps-number-flat",
	});
}

export default Component;
