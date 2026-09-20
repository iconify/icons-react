import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhekvnzub.css';
import '../../css/m/m5fevxfgx.css';
import '../../css/f/fdk2vzbxo.css';
import '../../css/j/jpgutnuyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rhekvnzub"/><path class="m5fevxfgx"/><path class="fdk2vzbxo"/><path class="jpgutnuyl"/></g>`,
		"fallback": "streamline-cyber-color:piano-3",
	});
}

export default Component;
