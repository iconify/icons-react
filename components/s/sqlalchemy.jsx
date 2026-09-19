import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d90r3_bwn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d90r3_bwn"/>`,
		"fallback": "devicon-plain:sqlalchemy",
	});
}

export default Component;
