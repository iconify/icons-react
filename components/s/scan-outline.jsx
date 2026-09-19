import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiel8l84e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiel8l84e"/>`,
		"fallback": "bitcoin-icons:scan-outline",
	});
}

export default Component;
