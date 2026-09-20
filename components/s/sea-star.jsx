import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2gmgqbwv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2gmgqbwv"/>`,
		"fallback": "pinhead:sea-star",
	});
}

export default Component;
