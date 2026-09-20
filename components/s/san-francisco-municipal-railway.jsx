import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va893noiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va893noiy"/>`,
		"fallback": "thesvg-color:san-francisco-municipal-railway",
	});
}

export default Component;
