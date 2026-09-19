import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4_6nhbxh.css';

const viewBox = {"width":1792,"height":1728};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4_6nhbxh"/>`,
		"fallback": "fa:recycle",
	});
}

export default Component;
