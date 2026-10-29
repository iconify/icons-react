import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twy10abre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twy10abre"/>`,
		"fallback": "withicons:list-ordered-solid",
	});
}

export default Component;
