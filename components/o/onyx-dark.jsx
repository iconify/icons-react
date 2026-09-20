import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o91ua3bmm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o91ua3bmm"/>`,
		"fallback": "selfhst:onyx-dark",
	});
}

export default Component;
