import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c58_3zblq.css';

const viewBox = {"width":120,"height":258};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c58_3zblq"/>`,
		"fallback": "thesvg-color:mongodb-light",
	});
}

export default Component;
