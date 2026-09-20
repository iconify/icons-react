import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atvq_qble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atvq_qble"/>`,
		"fallback": "octicon:pin-24",
	});
}

export default Component;
