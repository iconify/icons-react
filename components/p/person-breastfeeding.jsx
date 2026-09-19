import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at31ysbip.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at31ysbip"/>`,
		"fallback": "fa6-solid:person-breastfeeding",
	});
}

export default Component;
