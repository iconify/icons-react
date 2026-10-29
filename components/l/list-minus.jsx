import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ivin-ubhq.css';
import '../../css/x/xyfq1bbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ivin-ubhq wm-k"/><path class="wm-s xyfq1bbsv"/></g>`,
		"fallback": "withicons-bauhaus:list-minus",
	});
}

export default Component;
