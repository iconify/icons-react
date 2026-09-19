import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wsz48i5vf.css';
import '../../css/m/mfueqsb7p.css';
import '../../css/y/yn7zagbyu.css';
import '../../css/h/hdqeu7brz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="wsz48i5vf"/><path class="mfueqsb7p"/><rect class="yn7zagbyu"/><path class="hdqeu7brz"/></g>`,
		"fallback": "icon-park-outline:router",
	});
}

export default Component;
