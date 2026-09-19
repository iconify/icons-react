import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma8_qib5x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma8_qib5x"/>`,
		"fallback": "fa7-solid:solar-panel",
	});
}

export default Component;
