import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/saegd-a4a.css';
import '../../css/y/y20_iib9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="saegd-a4a"/><path class="y20_iib9u"/></g>`,
		"fallback": "streamline-freehand-color:organization-files",
	});
}

export default Component;
