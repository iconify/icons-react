import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqcz6cb9l.css';
import '../../css/t/tlh8ipbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gqcz6cb9l"/><path class="tlh8ipbsn"/></g>`,
		"fallback": "tdesign:wave-left",
	});
}

export default Component;
