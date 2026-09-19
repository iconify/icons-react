import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt811tlus.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt811tlus"/>`,
		"fallback": "f7:minus-square",
	});
}

export default Component;
