import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7__qvbfs.css';
import '../../css/o/o_smurbaj.css';
import '../../css/u/ujl_3ub2b.css';
import '../../css/z/ztzj9jb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h7__qvbfs"/><path class="o_smurbaj"/><path class="ujl_3ub2b"/><path class="ztzj9jb3y"/></g>`,
		"fallback": "streamline-ultimate-color:water-bottle-glass",
	});
}

export default Component;
