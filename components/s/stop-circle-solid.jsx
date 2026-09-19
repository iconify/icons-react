import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t45mdvb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t45mdvb2l"/>`,
		"fallback": "heroicons:stop-circle-solid",
	});
}

export default Component;
