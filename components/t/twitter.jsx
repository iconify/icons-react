import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gquzl-boa.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gquzl-boa"/>`,
		"fallback": "devicon:twitter",
	});
}

export default Component;
