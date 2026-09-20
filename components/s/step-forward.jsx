import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ody0k2bki.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ody0k2bki"/>`,
		"fallback": "zondicons:step-forward",
	});
}

export default Component;
