import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_4gpr37i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_4gpr37i"/>`,
		"fallback": "thesvg-color:matillion",
	});
}

export default Component;
