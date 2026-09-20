import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b45uyl5ow.css';
import '../../css/l/lnz-_8qeq.css';
import '../../css/s/sogihwb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b45uyl5ow"/><path class="lnz-_8qeq"/><path class="sogihwb-g"/></g>`,
		"fallback": "streamline-freehand-color:money-atm-withdraw",
	});
}

export default Component;
