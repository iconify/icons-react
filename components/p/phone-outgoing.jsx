import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehe98ehnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehe98ehnp"/>`,
		"fallback": "noviair:phone-outgoing",
	});
}

export default Component;
