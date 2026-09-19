import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1brok5-g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1brok5-g"/>`,
		"fallback": "cib:mail-ru",
	});
}

export default Component;
