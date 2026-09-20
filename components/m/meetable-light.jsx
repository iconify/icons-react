import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk7-njbxj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk7-njbxj"/>`,
		"fallback": "selfhst:meetable-light",
	});
}

export default Component;
