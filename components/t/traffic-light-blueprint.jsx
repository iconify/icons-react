import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uzzot-_4k.css';
import '../../css/l/l78_ntbyf.css';
import '../../css/j/jlg0vpbbz.css';
import '../../css/j/jfzxi0-ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="uzzot-_4k wm-deco"/><path class="l78_ntbyf wm-deco"/><path class="jlg0vpbbz wm-k"/><path class="jfzxi0-ge wm-a"/></g>`,
		"fallback": "withicons:traffic-light-blueprint",
	});
}

export default Component;
