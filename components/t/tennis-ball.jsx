import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_481206c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_481206c"/>`,
		"fallback": "game-icons:tennis-ball",
	});
}

export default Component;
