import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi71-2bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi71-2bem"/>`,
		"fallback": "tabler:signal-2g",
	});
}

export default Component;
