import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g2ynxdbfz.css';
import '../../css/u/u9vhvcc7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g2ynxdbfz"/><path class="u9vhvcc7q"/></g>`,
		"fallback": "hugeicons:signal-no-02",
	});
}

export default Component;
