import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/muq09cbqz.css';
import '../../css/v/vot250bpi.css';
import '../../css/k/knt4apnld.css';
import '../../css/m/mk8d_nbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="muq09cbqz"/><path class="vot250bpi"/><path class="knt4apnld"/><path class="mk8d_nbic"/></g>`,
		"fallback": "streamline-freehand-color:server-edit",
	});
}

export default Component;
