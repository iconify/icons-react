import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9kxl12hy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9kxl12hy"/>`,
		"fallback": "pinhead:three-dots-up-down",
	});
}

export default Component;
