import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik0_kn2ok.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik0_kn2ok"/>`,
		"fallback": "fa:safari",
	});
}

export default Component;
