import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtirn6bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtirn6bud"/>`,
		"fallback": "thesvg-color:radar",
	});
}

export default Component;
