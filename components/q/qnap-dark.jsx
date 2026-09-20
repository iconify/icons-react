import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg_08ysvz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg_08ysvz"/>`,
		"fallback": "selfhst:qnap-dark",
	});
}

export default Component;
