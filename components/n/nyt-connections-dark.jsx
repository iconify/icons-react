import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqkwmdx8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqkwmdx8p"/>`,
		"fallback": "selfhst:nyt-connections-dark",
	});
}

export default Component;
