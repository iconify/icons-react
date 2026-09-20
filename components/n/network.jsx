import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o3q1g9bzj.css';
import '../../css/o/ow55h5bky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o3q1g9bzj"/><path class="ow55h5bky"/></g>`,
		"fallback": "streamline-freehand-color:network",
	});
}

export default Component;
