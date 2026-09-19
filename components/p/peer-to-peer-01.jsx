import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wyxq__p8i.css';
import '../../css/t/tnvmgoeyz.css';
import '../../css/c/c61zi6xxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wyxq__p8i"/><path class="tnvmgoeyz"/><path class="c61zi6xxh"/></g>`,
		"fallback": "hugeicons:peer-to-peer-01",
	});
}

export default Component;
