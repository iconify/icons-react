import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvhp-mbon.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvhp-mbon"/>`,
		"fallback": "pullo:postcard",
	});
}

export default Component;
