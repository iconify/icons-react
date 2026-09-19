import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jajfe5b9c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jajfe5b9c"/>`,
		"fallback": "devicon:kalilinux",
	});
}

export default Component;
