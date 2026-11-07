import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2c4dccfz.css';
import '../../css/r/rm7ga8nok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2c4dccfz"/><path class="rm7ga8nok"/>`,
		"fallback": "solar:sofa-3-bold",
	});
}

export default Component;
