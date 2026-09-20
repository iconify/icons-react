import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjhrfp63w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjhrfp63w"/>`,
		"fallback": "zondicons:notifications-outline",
	});
}

export default Component;
