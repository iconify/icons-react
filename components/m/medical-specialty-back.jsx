import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_ka0nboq.css';
import '../../css/f/fvm7rxpzh.css';
import '../../css/e/e4b09vbdc.css';
import '../../css/y/yg1d9sbfc.css';
import '../../css/o/of81nrbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v_ka0nboq"/><path class="fvm7rxpzh"/><path class="e4b09vbdc"/><path class="yg1d9sbfc"/><path class="of81nrbbu"/></g>`,
		"fallback": "streamline-ultimate-color:medical-specialty-back",
	});
}

export default Component;
