import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd2q-gb1n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd2q-gb1n"/>`,
		"fallback": "streamline:scanner-3",
	});
}

export default Component;
