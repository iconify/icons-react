import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8gxregvs.css';

const viewBox = {"width":1551,"height":1232};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8gxregvs"/>`,
		"fallback": "thesvg-color:nongfu-spring",
	});
}

export default Component;
