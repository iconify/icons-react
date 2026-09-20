import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytygmfb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytygmfb4y"/>`,
		"fallback": "thesvg-color:kubuntu",
	});
}

export default Component;
