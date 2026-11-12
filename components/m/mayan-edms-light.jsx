import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m07vq1b5j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m07vq1b5j"/>`,
		"fallback": "selfhst:mayan-edms-light",
	});
}

export default Component;
