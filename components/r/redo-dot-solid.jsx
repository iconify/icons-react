import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anb5yxb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anb5yxb5a"/>`,
		"fallback": "iconaut:redo-dot-solid",
	});
}

export default Component;
