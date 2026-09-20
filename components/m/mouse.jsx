import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gbsbs-cqo.css';
import '../../css/n/nui9lsblr.css';
import '../../css/r/ri4no1frt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gbsbs-cqo"/><path class="nui9lsblr"/><path class="ri4no1frt"/></g>`,
		"fallback": "streamline-freehand-color:mouse",
	});
}

export default Component;
