import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmv8-5b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmv8-5b3j"/>`,
		"fallback": "noviair-light:stethoscope",
	});
}

export default Component;
