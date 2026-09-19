import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbolue0xm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbolue0xm"/>`,
		"fallback": "cib:jet",
	});
}

export default Component;
