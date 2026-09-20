import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zibuxdi7c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zibuxdi7c"/>`,
		"fallback": "streamline:petri-dish-lab-equipment-remix",
	});
}

export default Component;
