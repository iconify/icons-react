import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gka18obue.css';
import '../../css/f/ftcemokbj.css';
import '../../css/a/aj3plwbwr.css';
import '../../css/q/qpkp9yzjm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gka18obue"/><path class="ftcemokbj"/><path class="aj3plwbwr"/><path class="qpkp9yzjm"/></g>`,
		"fallback": "streamline-kameleon-color:light-bulb-duo",
	});
}

export default Component;
