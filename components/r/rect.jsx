import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox2p3pbkc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox2p3pbkc"/>`,
		"fallback": "devicon-plain:rect",
	});
}

export default Component;
