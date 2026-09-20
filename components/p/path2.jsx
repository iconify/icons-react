import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjldq36og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjldq36og"/>`,
		"fallback": "reicon:path2",
	});
}

export default Component;
