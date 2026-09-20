import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rus7agb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rus7agb1g"/>`,
		"fallback": "tdesign:ipod-filled",
	});
}

export default Component;
