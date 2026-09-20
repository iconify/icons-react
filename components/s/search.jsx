import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq98in52p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fq98in52p"/>`,
		"fallback": "reicon:search",
	});
}

export default Component;
