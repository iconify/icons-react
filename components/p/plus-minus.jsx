import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/d3f7vubre.css';
import '../../css/a/a-m7irbsn.css';
import '../../css/n/nn7ldeyao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="d3f7vubre"/><path class="a-m7irbsn"/><path class="nn7ldeyao"/></g>`,
		"fallback": "matita:plus-minus",
	});
}

export default Component;
