import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qks8ej-gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qks8ej-gp"/>`,
		"fallback": "simple-icons:langchaincorporate",
	});
}

export default Component;
