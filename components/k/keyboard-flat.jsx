import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ilef90r2i.css';
import '../../css/g/gp2un2bwc.css';
import '../../css/m/m6eplnbnj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ilef90r2i"/><path class="gp2un2bwc"/><path class="m6eplnbnj"/></g>`,
		"fallback": "streamline-color:keyboard-flat",
	});
}

export default Component;
