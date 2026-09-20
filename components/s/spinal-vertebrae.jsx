import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3ee4zi2k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3ee4zi2k"/>`,
		"fallback": "pinhead:spinal-vertebrae",
	});
}

export default Component;
