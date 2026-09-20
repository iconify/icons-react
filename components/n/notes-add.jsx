import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xxoqyms1v.css';
import '../../css/y/ycpresbqn.css';
import '../../css/c/cebpj_b9y.css';
import '../../css/s/s5ir6dwik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xxoqyms1v"/><path class="ycpresbqn"/><path class="cebpj_b9y"/><path class="s5ir6dwik"/></g>`,
		"fallback": "streamline-freehand-color:notes-add",
	});
}

export default Component;
