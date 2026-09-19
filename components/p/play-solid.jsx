import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6ivx9b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6ivx9b3b"/>`,
		"fallback": "heroicons:play-solid",
	});
}

export default Component;
