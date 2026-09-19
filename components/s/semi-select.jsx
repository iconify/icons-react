import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxrugac4j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxrugac4j"/>`,
		"fallback": "ep:semi-select",
	});
}

export default Component;
