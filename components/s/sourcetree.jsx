import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efihy-46x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efihy-46x"/>`,
		"fallback": "fontisto:sourcetree",
	});
}

export default Component;
