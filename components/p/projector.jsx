import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gveut4b0c.css';

const viewBox = {"width":1024,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gveut4b0c"/>`,
		"fallback": "whh:projector",
	});
}

export default Component;
