import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr6936bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mr6936bzt"/>`,
		"fallback": "token:tarot",
	});
}

export default Component;
