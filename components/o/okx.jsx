import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye-7s2bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye-7s2bkw"/>`,
		"fallback": "thesvg-color:okx",
	});
}

export default Component;
