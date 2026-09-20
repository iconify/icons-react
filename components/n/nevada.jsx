import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4850jj9d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4850jj9d"/>`,
		"fallback": "pinhead:nevada",
	});
}

export default Component;
