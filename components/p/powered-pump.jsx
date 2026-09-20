import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lez76uq7i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lez76uq7i"/>`,
		"fallback": "temaki:powered-pump",
	});
}

export default Component;
