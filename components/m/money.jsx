import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaw36fbcd.css';

const viewBox = {"width":750,"height":710};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaw36fbcd"/>`,
		"fallback": "il:money",
	});
}

export default Component;
