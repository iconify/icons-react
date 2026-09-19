import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_7nqnbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o_7nqnbbo"/>`,
		"fallback": "basil:reddit-solid",
	});
}

export default Component;
