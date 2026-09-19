import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfsyxzb2y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfsyxzb2y"/>`,
		"fallback": "fa7-solid:mug-hot",
	});
}

export default Component;
