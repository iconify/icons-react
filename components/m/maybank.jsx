import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj_2p5drs.css';

const viewBox = {"width":1568,"height":1568};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj_2p5drs"/>`,
		"fallback": "thesvg:maybank",
	});
}

export default Component;
