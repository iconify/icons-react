import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb2gq0qto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb2gq0qto primary"/>`,
		"fallback": "iconaut:shield-duotone",
	});
}

export default Component;
