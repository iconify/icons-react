import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa76olytg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fa76olytg"/>`,
		"fallback": "ix:machine-a",
	});
}

export default Component;
