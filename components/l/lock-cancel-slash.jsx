import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/htaph4m8w.css';
import '../../css/s/shci4xmtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="htaph4m8w"/><path class="shci4xmtr"/></g>`,
		"fallback": "streamline-freehand-color:lock-cancel-slash",
	});
}

export default Component;
