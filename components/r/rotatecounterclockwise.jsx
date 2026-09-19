import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpwpmd72b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpwpmd72b"/>`,
		"fallback": "whh:rotatecounterclockwise",
	});
}

export default Component;
