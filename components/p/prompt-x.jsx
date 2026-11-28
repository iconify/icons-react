import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h67n5cciw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h67n5cciw"/>`,
		"fallback": "noviair:prompt-x",
	});
}

export default Component;
