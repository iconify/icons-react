import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s3-m1_bzy.css';
import '../../css/x/xulwrkedr.css';
import '../../css/b/bxkhl1-0w.css';
import '../../css/w/w_yq6qb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s3-m1_bzy"/><path class="xulwrkedr"/><path class="bxkhl1-0w"/><path class="w_yq6qb8v"/></g>`,
		"fallback": "streamline-freehand:saving-safe",
	});
}

export default Component;
