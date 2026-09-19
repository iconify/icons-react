import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4-jhn-gz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4-jhn-gz"/>`,
		"fallback": "foundation:social-smashing-mag",
	});
}

export default Component;
