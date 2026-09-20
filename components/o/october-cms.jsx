import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhfdrr6ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhfdrr6ss"/>`,
		"fallback": "thesvg-color:october-cms",
	});
}

export default Component;
