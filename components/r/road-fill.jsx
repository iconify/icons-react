import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_jptcbej.css';
import '../../css/f/f7nubsbkf.css';
import '../../css/o/obp2bdcvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d_jptcbej"/><path class="f7nubsbkf"/><path class="obp2bdcvw"/></g>`,
		"fallback": "lets-icons:road-fill",
	});
}

export default Component;
