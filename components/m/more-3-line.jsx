import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa9uavbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa9uavbmw"/>`,
		"fallback": "mingcute:more-3-line",
	});
}

export default Component;
