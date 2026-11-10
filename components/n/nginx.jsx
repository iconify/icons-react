import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqutpcb2e.css';
import '../../css/i/itzswk0_f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqutpcb2e"/><path class="itzswk0_f"/>`,
		"fallback": "devicon:nginx",
	});
}

export default Component;
