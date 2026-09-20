import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjly1mbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjly1mbwe"/>`,
		"fallback": "thesvg:supermicro",
	});
}

export default Component;
