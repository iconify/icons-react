import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkcrhfb2j.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkcrhfb2j"/>`,
		"fallback": "fa6-solid:skull-crossbones",
	});
}

export default Component;
