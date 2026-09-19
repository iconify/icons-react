import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifssrslal.css';
import '../../css/t/tdn_98ffj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifssrslal"/><path class="tdn_98ffj"/>`,
		"fallback": "bxl:paddle-p",
	});
}

export default Component;
