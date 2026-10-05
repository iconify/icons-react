import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kn0jtobbc.css';
import '../../css/e/e9l1yjrti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kn0jtobbc"/><path class="e9l1yjrti"/></g>`,
		"fallback": "matita:plus",
	});
}

export default Component;
