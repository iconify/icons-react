import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcj8lf2uo.css';
import '../../css/v/vo7nxtf0p.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAN0r9h4A"><g class="ft5dv1b6b"><path class="qcj8lf2uo"/><path class="vo7nxtf0p"/></g></mask></defs><path mask="url(#SVGAN0r9h4A)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:lightning-duotone-line",
	});
}

export default Component;
