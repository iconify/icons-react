import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adn-au1cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adn-au1cw"/>`,
		"fallback": "bxs:rectangle",
	});
}

export default Component;
