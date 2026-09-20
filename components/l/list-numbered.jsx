import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfn7tp2-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfn7tp2-z"/>`,
		"fallback": "tdesign:list-numbered",
	});
}

export default Component;
