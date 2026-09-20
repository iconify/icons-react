import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw7l9eb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw7l9eb4g"/>`,
		"fallback": "thesvg-color:kodak",
	});
}

export default Component;
