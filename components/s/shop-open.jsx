import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r83fu9jao.css';
import '../../css/y/y2q7lua0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r83fu9jao"/><path class="y2q7lua0s"/></g>`,
		"fallback": "streamline-freehand:shop-open",
	});
}

export default Component;
