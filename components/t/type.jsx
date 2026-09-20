import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es9i-mzhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es9i-mzhy"/>`,
		"fallback": "vadivam:type",
	});
}

export default Component;
