import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0pefdcep.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l0pefdcep"/>`,
		"fallback": "streamline-flex:round-anchor-point-remix",
	});
}

export default Component;
