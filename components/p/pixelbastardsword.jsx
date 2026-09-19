import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c25m_hbpq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c25m_hbpq"/>`,
		"fallback": "whh:pixelbastardsword",
	});
}

export default Component;
