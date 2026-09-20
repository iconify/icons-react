import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca41jjffc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca41jjffc"/>`,
		"fallback": "thesvg-color:testifly",
	});
}

export default Component;
