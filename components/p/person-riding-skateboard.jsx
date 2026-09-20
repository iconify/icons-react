import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1gzi36pg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1gzi36pg"/>`,
		"fallback": "pinhead:person-riding-skateboard",
	});
}

export default Component;
