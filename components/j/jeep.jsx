import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-nsp2j0f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-nsp2j0f"/>`,
		"fallback": "pinhead:jeep",
	});
}

export default Component;
