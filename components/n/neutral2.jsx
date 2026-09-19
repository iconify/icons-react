import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc8c-nbos.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc8c-nbos"/>`,
		"fallback": "icomoon-free:neutral2",
	});
}

export default Component;
