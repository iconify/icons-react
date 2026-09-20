import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee3nxnbiw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee3nxnbiw"/>`,
		"fallback": "streamline:pathfinder-merge",
	});
}

export default Component;
