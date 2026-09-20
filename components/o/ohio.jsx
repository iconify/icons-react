import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1fm_tbgu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1fm_tbgu"/>`,
		"fallback": "pinhead:ohio",
	});
}

export default Component;
