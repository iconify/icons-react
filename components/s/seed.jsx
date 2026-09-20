import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9m_-fb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9m_-fb0i"/>`,
		"fallback": "mdi:seed",
	});
}

export default Component;
