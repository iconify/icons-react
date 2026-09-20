import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmlo9qblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmlo9qblh"/>`,
		"fallback": "ri:rounded-corner",
	});
}

export default Component;
