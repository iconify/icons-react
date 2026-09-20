import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esz_ho-hy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esz_ho-hy"/>`,
		"fallback": "pinhead:village-buildings",
	});
}

export default Component;
