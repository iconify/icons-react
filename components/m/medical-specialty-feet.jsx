import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvxda7t5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvxda7t5j"/>`,
		"fallback": "streamline-ultimate:medical-specialty-feet",
	});
}

export default Component;
