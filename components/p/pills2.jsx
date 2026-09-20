import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etr2pwbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="etr2pwbgj"/>`,
		"fallback": "reicon:pills2",
	});
}

export default Component;
