import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/lcbshzy3n.css';
import '../../css/c/cbmtmdb0g.css';
import '../../css/a/ah1lx8iif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="lcbshzy3n"/><path class="cbmtmdb0g"/><path class="ah1lx8iif"/></g>`,
		"fallback": "hugeicons:mail-open-01",
	});
}

export default Component;
