import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gbvhx2bhg.css';
import '../../css/t/tojyh1h4v.css';
import '../../css/x/x8z5eibiy.css';
import '../../css/i/iqxcsfbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gbvhx2bhg wm-k"/><path class="tojyh1h4v wm-k"/><path class="wm-k x8z5eibiy"/><path class="iqxcsfbku wm-shine"/></g>`,
		"fallback": "withicons-anime:stop",
	});
}

export default Component;
