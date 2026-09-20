import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw4e8vbqk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw4e8vbqk"/>`,
		"fallback": "pinhead:person-sitting-in-seat",
	});
}

export default Component;
