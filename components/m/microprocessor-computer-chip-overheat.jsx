import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qmyruqboo.css';
import '../../css/i/iqvxyvbht.css';
import '../../css/x/xfrwc6b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qmyruqboo"/><path class="iqvxyvbht"/><path class="xfrwc6b-q"/></g>`,
		"fallback": "streamline-freehand-color:microprocessor-computer-chip-overheat",
	});
}

export default Component;
