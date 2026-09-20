import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es8-o6bof.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es8-o6bof"/>`,
		"fallback": "pinhead:person-squatting-beside-person-standing-reaching-up",
	});
}

export default Component;
