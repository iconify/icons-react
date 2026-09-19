import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw8dmrebl.css';

const viewBox = {"width":1664,"height":1728};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw8dmrebl"/>`,
		"fallback": "fa:spinner",
	});
}

export default Component;
