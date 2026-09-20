import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3y8_nboe.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3y8_nboe"/>`,
		"fallback": "picon:razor",
	});
}

export default Component;
