import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txvb3pb0d.css';

const viewBox = {"width":1070,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txvb3pb0d"/>`,
		"fallback": "websymbol:user",
	});
}

export default Component;
