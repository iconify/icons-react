import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0g3j06su.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0g3j06su"/>`,
		"fallback": "f7:square-lefthalf-fill",
	});
}

export default Component;
