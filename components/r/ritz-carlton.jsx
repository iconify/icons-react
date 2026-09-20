import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efy1vz49s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efy1vz49s"/>`,
		"fallback": "thesvg-color:ritz-carlton",
	});
}

export default Component;
