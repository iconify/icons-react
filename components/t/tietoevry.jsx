import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw6mmv7qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw6mmv7qp"/>`,
		"fallback": "simple-icons:tietoevry",
	});
}

export default Component;
