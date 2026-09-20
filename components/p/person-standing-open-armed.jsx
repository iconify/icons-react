import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r34x9s4nm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r34x9s4nm"/>`,
		"fallback": "pinhead:person-standing-open-armed",
	});
}

export default Component;
