import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yil8wdbam.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yil8wdbam"/>`,
		"fallback": "fa6-solid:peseta-sign",
	});
}

export default Component;
