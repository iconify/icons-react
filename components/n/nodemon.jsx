import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xro2qwa6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xro2qwa6c"/>`,
		"fallback": "thesvg-color:nodemon",
	});
}

export default Component;
