import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea3l3ebac.css';

const viewBox = {"width":1568,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea3l3ebac"/>`,
		"fallback": "fa:sign-out",
	});
}

export default Component;
