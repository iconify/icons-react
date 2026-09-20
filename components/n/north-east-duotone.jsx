import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po5vicc7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po5vicc7d"/>`,
		"fallback": "si:north-east-duotone",
	});
}

export default Component;
