import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bilh46b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bilh46b6c"/>`,
		"fallback": "mdi:routes-clock",
	});
}

export default Component;
