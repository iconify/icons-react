import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3gb8_t8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3gb8_t8r"/>`,
		"fallback": "selfhst:microsoft-excel-2018-light",
	});
}

export default Component;
