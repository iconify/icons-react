import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l1nnh9gpj.css';
import '../../css/q/qt5di4bqt.css';
import '../../css/h/hfvj0jbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l1nnh9gpj"/><path class="qt5di4bqt"/><path class="hfvj0jbyk"/></g>`,
		"fallback": "streamline-freehand-color:mailbox-full-1",
	});
}

export default Component;
