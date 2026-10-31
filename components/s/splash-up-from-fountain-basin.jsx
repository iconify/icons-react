import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1xig5bik.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1xig5bik"/>`,
		"fallback": "pinhead:splash-up-from-fountain-basin",
	});
}

export default Component;
