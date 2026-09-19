import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw7jycbph.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw7jycbph"/>`,
		"fallback": "fa6-brands:pied-piper-pp",
	});
}

export default Component;
