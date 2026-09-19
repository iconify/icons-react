import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_mq6qb7p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_mq6qb7p"/>`,
		"fallback": "game-icons:love-song",
	});
}

export default Component;
