import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2sk80bby.css';
import '../../css/f/fbnpbdb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2sk80bby"/><path class="fbnpbdb2k"/>`,
		"fallback": "solar:square-dashed-bold-duotone",
	});
}

export default Component;
