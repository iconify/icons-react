import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay2czcqmv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay2czcqmv"/>`,
		"fallback": "dinkie-icons:monkey-face",
	});
}

export default Component;
