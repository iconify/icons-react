import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5_k12b9p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5_k12b9p"/>`,
		"fallback": "pinhead:kerb-raised-under-shoe",
	});
}

export default Component;
