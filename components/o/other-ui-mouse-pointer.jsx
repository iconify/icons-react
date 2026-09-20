import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw53exboa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw53exboa"/>`,
		"fallback": "streamline-block:other-ui-mouse-pointer",
	});
}

export default Component;
