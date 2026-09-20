import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkqg3otwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkqg3otwc"/>`,
		"fallback": "mdi:language-haskell",
	});
}

export default Component;
