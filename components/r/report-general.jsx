import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjc7l4brv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tjc7l4brv"/>`,
		"fallback": "ix:report-general",
	});
}

export default Component;
