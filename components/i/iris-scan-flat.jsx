import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ro8q5bbkj.css';
import '../../css/c/cfkuzybum.css';
import '../../css/x/xj_-2bc2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ro8q5bbkj"/><path class="cfkuzybum"/><path clip-rule="evenodd" class="xj_-2bc2b"/></g>`,
		"fallback": "streamline-sharp-color:iris-scan-flat",
	});
}

export default Component;
