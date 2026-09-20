import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ujaqvyhvu.css';
import '../../css/a/awbc_ybcs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ujaqvyhvu"/><path class="awbc_ybcs"/></g>`,
		"fallback": "streamline-flex-color:phone-qr-flat",
	});
}

export default Component;
