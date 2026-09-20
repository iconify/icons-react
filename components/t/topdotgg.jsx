import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrenpgb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrenpgb0f"/>`,
		"fallback": "thesvg:topdotgg",
	});
}

export default Component;
