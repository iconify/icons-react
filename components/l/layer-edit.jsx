import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkjpt4ruz.css';
import '../../css/x/xoqcm6b1o.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkjpt4ruz"/><path class="xoqcm6b1o"/>`,
		"fallback": "gis:layer-edit",
	});
}

export default Component;
