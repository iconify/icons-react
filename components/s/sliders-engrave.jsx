import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qbvzs6big.css';
import '../../css/m/mv2vj3bqa.css';
import '../../css/i/icg4znpvz.css';
import '../../css/i/i-r457bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qbvzs6big"/><path class="mv2vj3bqa wm-shadow"/><path class="icg4znpvz"/><path class="i-r457bof wm-a"/></g>`,
		"fallback": "withicons:sliders-engrave",
	});
}

export default Component;
