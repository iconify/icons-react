import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzk6tablr.css';
import '../../css/x/xckpabcxu.css';
import '../../css/q/qgn2embbm.css';
import '../../css/w/wihcyz8cw.css';
import '../../css/p/pc77monrj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rzk6tablr"/><path class="xckpabcxu"/><path class="qgn2embbm"/><path class="wihcyz8cw"/><path class="pc77monrj"/></g>`,
		"fallback": "streamline-kameleon-color:meteor-duo",
	});
}

export default Component;
