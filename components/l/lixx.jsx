import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq97rccgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq97rccgx"/>`,
		"fallback": "token:lixx",
	});
}

export default Component;
