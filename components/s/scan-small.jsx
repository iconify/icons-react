import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gugo44b3j.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gugo44b3j"/>`,
		"fallback": "dinkie-icons:scan-small",
	});
}

export default Component;
