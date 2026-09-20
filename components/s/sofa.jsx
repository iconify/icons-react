import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhlk6cbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhlk6cbys"/>`,
		"fallback": "keyline-icons:sofa",
	});
}

export default Component;
