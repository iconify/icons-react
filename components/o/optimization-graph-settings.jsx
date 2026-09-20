import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wvijw_e9n.css';
import '../../css/x/xc-be7hku.css';
import '../../css/e/etmc2gewa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wvijw_e9n"/><path class="xc-be7hku"/><path class="etmc2gewa"/></g>`,
		"fallback": "streamline-freehand:optimization-graph-settings",
	});
}

export default Component;
