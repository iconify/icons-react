import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqoa_wf6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vqoa_wf6d"/>`,
		"fallback": "streamline-freehand-color:saving-bull-market",
	});
}

export default Component;
