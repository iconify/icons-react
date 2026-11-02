import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/nms7-qboh.css';
import '../../css/h/ht1igy88y.css';
import '../../css/k/k-64ydb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="nms7-qboh"/><path class="ht1igy88y"/><path class="k-64ydb8a"/></g>`,
		"fallback": "matita:meh",
	});
}

export default Component;
