import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anh9q7b7t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anh9q7b7t"/>`,
		"fallback": "f7:money-dollar-circle-fill",
	});
}

export default Component;
