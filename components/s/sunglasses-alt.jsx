import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoxqbl1yl.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoxqbl1yl"/>`,
		"fallback": "fontisto:sunglasses-alt",
	});
}

export default Component;
