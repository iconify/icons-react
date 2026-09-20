import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcgi2ob_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcgi2ob_p"/>`,
		"fallback": "thesvg-color:osmc",
	});
}

export default Component;
