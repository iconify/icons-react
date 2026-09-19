import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os67eymuh.css';
import '../../css/s/sg7qdup6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os67eymuh"/><path class="sg7qdup6z"/>`,
		"fallback": "cil:rain",
	});
}

export default Component;
