import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnstc0q8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnstc0q8i"/>`,
		"fallback": "iconaut:leaf-solid",
	});
}

export default Component;
