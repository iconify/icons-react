import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b5psmubdd.css';
import '../../css/d/deje9ze3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b5psmubdd"/><path class="deje9ze3x"/></g>`,
		"fallback": "streamline-freehand-color:light-mode-dark-light",
	});
}

export default Component;
