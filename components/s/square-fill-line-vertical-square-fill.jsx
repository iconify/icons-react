import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3l5rcoyc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3l5rcoyc"/>`,
		"fallback": "f7:square-fill-line-vertical-square-fill",
	});
}

export default Component;
