import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqp9u9b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nqp9u9b7d"/>`,
		"fallback": "reicon:key-square2",
	});
}

export default Component;
