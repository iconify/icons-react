import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2m6l6bqt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2m6l6bqt"/>`,
		"fallback": "pinhead:person-sledding-downhill",
	});
}

export default Component;
