import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/a/aqyo1ebes.css';
import '../../css/c/cnn1t1ysc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="aqyo1ebes"/><path class="cnn1t1ysc"/></g>`,
		"fallback": "bitcoin-icons:nfc-outline",
	});
}

export default Component;
