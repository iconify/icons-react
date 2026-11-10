import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/g0w7nikov.css';
import '../../css/n/nc24kdbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="g0w7nikov"/><path class="nc24kdbti"/></g>`,
		"fallback": "matita:lambda",
	});
}

export default Component;
