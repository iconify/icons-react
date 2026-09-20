import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpan3nb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpan3nb4a"/>`,
		"fallback": "uil:phone",
	});
}

export default Component;
