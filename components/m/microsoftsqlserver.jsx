import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc6f8x_ev.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc6f8x_ev"/>`,
		"fallback": "devicon-plain:microsoftsqlserver",
	});
}

export default Component;
