import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b3a2q1b0u.css';
import '../../css/z/zvdyxlo9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b3a2q1b0u"/><path class="zvdyxlo9a"/></g>`,
		"fallback": "streamline-sharp-color:warning-shield-flat",
	});
}

export default Component;
