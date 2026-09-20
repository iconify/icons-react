import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck-872bsj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck-872bsj"/>`,
		"fallback": "pinhead:spiky-fish-under-fillet-knife",
	});
}

export default Component;
