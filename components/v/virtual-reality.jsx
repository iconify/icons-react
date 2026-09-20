import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz71x_bdp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz71x_bdp"/>`,
		"fallback": "streamline:virtual-reality",
	});
}

export default Component;
