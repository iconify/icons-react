import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw2sdwbbs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw2sdwbbs"/>`,
		"fallback": "pinhead:jp-monument",
	});
}

export default Component;
