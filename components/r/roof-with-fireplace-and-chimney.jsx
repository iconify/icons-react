import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wslcj4bmw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wslcj4bmw"/>`,
		"fallback": "pinhead:roof-with-fireplace-and-chimney",
	});
}

export default Component;
