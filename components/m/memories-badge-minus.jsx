import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c61345ufy.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c61345ufy"/>`,
		"fallback": "f7:memories-badge-minus",
	});
}

export default Component;
