import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox-65bbyj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox-65bbyj"/>`,
		"fallback": "streamline:interface-arrows-diagonal-arrows-arrow-server-data-diagonal-internet-transfer-network",
	});
}

export default Component;
