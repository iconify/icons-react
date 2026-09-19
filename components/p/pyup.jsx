import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcyxmuqez.css';

const viewBox = {"width":443,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcyxmuqez"/>`,
		"fallback": "file-icons:pyup",
	});
}

export default Component;
