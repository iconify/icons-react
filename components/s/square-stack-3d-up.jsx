import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba6a98byv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba6a98byv"/>`,
		"fallback": "f7:square-stack-3d-up",
	});
}

export default Component;
