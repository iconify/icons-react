import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpvuhqq9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qpvuhqq9f"/>`,
		"fallback": "griddy-icons:row-plus",
	});
}

export default Component;
