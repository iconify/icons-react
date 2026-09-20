import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gj_2b-kgy.css';
import '../../css/t/t2ojvib5p.css';
import '../../css/m/mup07mi9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gj_2b-kgy"/><path class="t2ojvib5p"/><path class="mup07mi9p"/></g>`,
		"fallback": "streamline-freehand-color:lens-horizontal",
	});
}

export default Component;
