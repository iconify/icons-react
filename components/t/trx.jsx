import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydk_n5baj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydk_n5baj"/>`,
		"fallback": "cryptocurrency:trx",
	});
}

export default Component;
