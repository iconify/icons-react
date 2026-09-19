import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_b-gubjy.css';
import '../../css/m/m8pf_nbon.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_b-gubjy"/><path class="m8pf_nbon"/>`,
		"fallback": "ep:switch-button",
	});
}

export default Component;
