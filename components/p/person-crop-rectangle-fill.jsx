import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bka3izbbe.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bka3izbbe"/>`,
		"fallback": "f7:person-crop-rectangle-fill",
	});
}

export default Component;
