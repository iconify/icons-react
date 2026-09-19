import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmw12wbqr.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmw12wbqr"/>`,
		"fallback": "fa-regular:sad-cry",
	});
}

export default Component;
