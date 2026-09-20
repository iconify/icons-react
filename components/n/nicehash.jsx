import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa0-u8b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa0-u8b8p"/>`,
		"fallback": "thesvg-color:nicehash",
	});
}

export default Component;
