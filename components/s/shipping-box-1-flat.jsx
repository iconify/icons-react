import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n8hqz4_1x.css';
import '../../css/g/g4mn7vbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n8hqz4_1x"/><path class="g4mn7vbum"/></g>`,
		"fallback": "streamline-sharp-color:shipping-box-1-flat",
	});
}

export default Component;
