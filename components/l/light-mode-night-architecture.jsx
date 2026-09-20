import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qc8345bdu.css';
import '../../css/o/oljyhebzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qc8345bdu"/><path class="oljyhebzh"/></g>`,
		"fallback": "streamline-freehand-color:light-mode-night-architecture",
	});
}

export default Component;
