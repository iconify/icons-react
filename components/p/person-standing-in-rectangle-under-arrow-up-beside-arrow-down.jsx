import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g25ne3b-s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g25ne3b-s"/>`,
		"fallback": "pinhead:person-standing-in-rectangle-under-arrow-up-beside-arrow-down",
	});
}

export default Component;
