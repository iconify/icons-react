import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef8_ic69j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef8_ic69j"/>`,
		"fallback": "selfhst:picpeak",
	});
}

export default Component;
