import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my18y5bfg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my18y5bfg"/>`,
		"fallback": "devicon-plain:qodo",
	});
}

export default Component;
