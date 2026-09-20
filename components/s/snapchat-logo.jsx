import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qo5xwrh4m.css';
import '../../css/l/l-gr6rf7s.css';
import '../../css/l/lxfdzybbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qo5xwrh4m"/><path class="l-gr6rf7s"/><path class="lxfdzybbe"/></g>`,
		"fallback": "streamline-ultimate-color:snapchat-logo",
	});
}

export default Component;
