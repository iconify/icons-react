import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b4jwp893i.css';
import '../../css/m/mz8zz6b9f.css';
import '../../css/b/bu8aiwuof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b4jwp893i"/><path class="mz8zz6b9f"/><path class="bu8aiwuof"/></g>`,
		"fallback": "streamline-freehand-color:volume-control-down-1",
	});
}

export default Component;
