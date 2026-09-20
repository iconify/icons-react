import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5u-w0b6n.css';
import '../../css/j/jj22oxbjh.css';

const viewBox = {"width":1550,"height":971};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5u-w0b6n"/><path class="jj22oxbjh"/>`,
		"fallback": "thesvg-color:mondelez-international-light",
	});
}

export default Component;
