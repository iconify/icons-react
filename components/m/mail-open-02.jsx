import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/cbmtmdb0g.css';
import '../../css/p/pwrqsra9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="cbmtmdb0g"/><path class="pwrqsra9i"/></g>`,
		"fallback": "hugeicons:mail-open-02",
	});
}

export default Component;
