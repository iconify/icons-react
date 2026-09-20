import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgb5kccst.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgb5kccst"/>`,
		"fallback": "zondicons:user",
	});
}

export default Component;
