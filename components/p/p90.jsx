import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amie3nbbr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amie3nbbr"/>`,
		"fallback": "game-icons:p90",
	});
}

export default Component;
