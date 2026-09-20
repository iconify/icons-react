import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7si1sb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7si1sb9l"/>`,
		"fallback": "thesvg-color:pandora",
	});
}

export default Component;
