import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_l53qmws.css';
import '../../css/s/ss-hkiwik.css';
import '../../css/j/jwnqwzbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d_l53qmws"/><path class="ss-hkiwik"/><path class="jwnqwzbdk"/></g>`,
		"fallback": "andrsrxn:soil-moisture-global-thermometer",
	});
}

export default Component;
