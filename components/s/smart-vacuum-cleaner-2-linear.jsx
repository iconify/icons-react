import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gshkn9qqt.css';
import '../../css/s/srug0hb7t.css';
import '../../css/x/xv6kuw8hw.css';
import '../../css/l/ltt5oydcb.css';
import '../../css/p/phgew86rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gshkn9qqt"/><path class="srug0hb7t"/><path class="xv6kuw8hw"/><path class="ltt5oydcb"/><path class="phgew86rc"/></g>`,
		"fallback": "solar:smart-vacuum-cleaner-2-linear",
	});
}

export default Component;
