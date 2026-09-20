import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9cynrzbj.css';
import '../../css/z/zqfr18vyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9cynrzbj"/><path class="zqfr18vyr"/>`,
		"fallback": "selfhst:typescript",
	});
}

export default Component;
