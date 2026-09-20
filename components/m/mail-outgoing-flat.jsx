import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmkn_ihvi.css';
import '../../css/v/vcy7_pblu.css';
import '../../css/j/jt5hh3b6c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qmkn_ihvi"/><path class="vcy7_pblu"/><path class="jt5hh3b6c"/></g>`,
		"fallback": "streamline-plump-color:mail-outgoing-flat",
	});
}

export default Component;
