import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-ublab8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-ublab8i"/>`,
		"fallback": "noviair:palette-edit",
	});
}

export default Component;
