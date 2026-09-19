import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw9y56b6g.css';

const viewBox = {"width":1920,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw9y56b6g"/>`,
		"fallback": "fa:university",
	});
}

export default Component;
