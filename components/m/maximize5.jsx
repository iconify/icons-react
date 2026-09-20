import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld8kjwf-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld8kjwf-l"/>`,
		"fallback": "reicon:maximize5",
	});
}

export default Component;
