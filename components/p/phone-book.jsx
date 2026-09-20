import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mxol6lbrs.css';
import '../../css/b/bhqzib66w.css';
import '../../css/n/nsij66bfw.css';
import '../../css/a/a8bh2w70l.css';
import '../../css/d/drhn-r_yg.css';
import '../../css/n/no5kxcbkl.css';
import '../../css/f/f2hymkeod.css';
import '../../css/c/ciw3vghzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mxol6lbrs"/><path class="bhqzib66w"/><path class="nsij66bfw"/><path class="a8bh2w70l"/><path class="drhn-r_yg"/><path class="no5kxcbkl"/><path class="f2hymkeod"/><path class="ciw3vghzz"/></g>`,
		"fallback": "streamline-freehand-color:phone-book",
	});
}

export default Component;
