import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di1z4achv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di1z4achv"/>`,
		"fallback": "f7:lock-open-fill",
	});
}

export default Component;
