import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ror7eiqam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ror7eiqam"/>`,
		"fallback": "eos-icons:troubleshooting",
	});
}

export default Component;
