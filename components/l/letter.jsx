import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzjz2-bvc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzjz2-bvc"/>`,
		"fallback": "picon:letter",
	});
}

export default Component;
