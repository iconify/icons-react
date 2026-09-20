import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhv7ffbkc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhv7ffbkc"/>`,
		"fallback": "ix:line-solid",
	});
}

export default Component;
