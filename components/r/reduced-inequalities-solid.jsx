import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dapt95bvc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dapt95bvc"/>`,
		"fallback": "streamline:reduced-inequalities-solid",
	});
}

export default Component;
