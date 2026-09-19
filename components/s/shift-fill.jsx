import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t48i01_4j.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t48i01_4j"/>`,
		"fallback": "f7:shift-fill",
	});
}

export default Component;
