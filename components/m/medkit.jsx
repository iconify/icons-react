import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_3v7z53s.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_3v7z53s"/>`,
		"fallback": "fa:medkit",
	});
}

export default Component;
