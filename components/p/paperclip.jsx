import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjy585wqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjy585wqu"/>`,
		"fallback": "uim:paperclip",
	});
}

export default Component;
