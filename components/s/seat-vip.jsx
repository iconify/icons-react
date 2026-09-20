import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/phk9uibbc.css';
import '../../css/c/c5dd8mb9u.css';
import '../../css/h/h7sstobfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="phk9uibbc"/><path class="c5dd8mb9u"/><path class="h7sstobfk"/></g>`,
		"fallback": "streamline-freehand-color:seat-vip",
	});
}

export default Component;
