import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj66bgbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj66bgbmi"/>`,
		"fallback": "mdi:lorry-check",
	});
}

export default Component;
