import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7me47nlj.css';
import '../../css/r/ryesqkbnu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7me47nlj"/><path class="ryesqkbnu"/>`,
		"fallback": "carbon:vegetation-height",
	});
}

export default Component;
