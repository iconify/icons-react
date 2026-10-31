import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/i/iiofd4tvn.css';
import '../../css/r/rn8g4s9oq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="iiofd4tvn"/><path class="rn8g4s9oq"/></g>`,
		"fallback": "streamline-kameleon-color:transfer-cloud-pop",
	});
}

export default Component;
