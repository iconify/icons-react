import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho98fkb4c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho98fkb4c"/>`,
		"fallback": "carbon:video-off",
	});
}

export default Component;
