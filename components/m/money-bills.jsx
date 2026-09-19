import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzfha4bbl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzfha4bbl"/>`,
		"fallback": "fa7-solid:money-bills",
	});
}

export default Component;
