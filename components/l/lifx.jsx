import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuyqt2b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuyqt2b0c"/>`,
		"fallback": "thesvg-color:lifx",
	});
}

export default Component;
