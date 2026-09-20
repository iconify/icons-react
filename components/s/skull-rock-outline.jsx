import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxw6x99ms.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxw6x99ms"/>`,
		"fallback": "pinhead:skull-rock-outline",
	});
}

export default Component;
