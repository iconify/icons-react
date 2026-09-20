import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soceu0b6b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soceu0b6b"/>`,
		"fallback": "pinhead:sauvastika-with-dots",
	});
}

export default Component;
