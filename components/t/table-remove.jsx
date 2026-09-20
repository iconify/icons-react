import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uutp14pfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uutp14pfo"/>`,
		"fallback": "mdi:table-remove",
	});
}

export default Component;
