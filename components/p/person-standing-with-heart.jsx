import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovd1yub7h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovd1yub7h"/>`,
		"fallback": "pinhead:person-standing-with-heart",
	});
}

export default Component;
