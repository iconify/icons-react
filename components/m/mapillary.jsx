import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot-2adjyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot-2adjyt"/>`,
		"fallback": "thesvg:mapillary",
	});
}

export default Component;
