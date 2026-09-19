import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekyey0bos.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekyey0bos"/>`,
		"fallback": "devicon-plain:talos",
	});
}

export default Component;
