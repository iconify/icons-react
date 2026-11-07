import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugozecbbz.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/s/s5ao597ql.css';
import '../../css/n/nsg7l2cph.css';
import '../../css/j/jd818u1tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ugozecbbz"/><g class="xtpeb-edw"><path class="s5ao597ql"/><path class="nsg7l2cph"/><path class="jd818u1tz"/></g>`,
		"fallback": "solar:sort-alphabetically-bold-duotone",
	});
}

export default Component;
