import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y3nvxmjsp.css';
import '../../css/g/gsv_mxbid.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y3nvxmjsp"/><path class="gsv_mxbid"/></g>`,
		"fallback": "ix:tag-plus",
	});
}

export default Component;
