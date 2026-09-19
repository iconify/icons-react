import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os2lqsv0d.css';
import '../../css/i/intfgbexo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os2lqsv0d"/><path class="intfgbexo"/>`,
		"fallback": "boxicons:tachometer",
	});
}

export default Component;
