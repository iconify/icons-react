import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-rnrksvw.css';
import '../../css/m/mqng4z9_o.css';
import '../../css/w/w94s4ta-o.css';
import '../../css/m/m9-oyt5vh.css';
import '../../css/d/dqc3sju1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-rnrksvw"/><path class="mqng4z9_o"/><path class="w94s4ta-o"/><path class="m9-oyt5vh"/><path class="dqc3sju1w"/></g>`,
		"fallback": "streamline-ultimate-color:messages-logo",
	});
}

export default Component;
