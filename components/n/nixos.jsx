import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnrdxabwp.css';
import '../../css/v/vbp1sgblq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hnrdxabwp"/><path clip-rule="evenodd" class="vbp1sgblq"/>`,
		"fallback": "devicon:nixos",
	});
}

export default Component;
