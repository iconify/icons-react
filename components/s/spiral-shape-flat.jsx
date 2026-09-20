import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkxrs8bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kkxrs8bgl"/>`,
		"fallback": "streamline-sharp-color:spiral-shape-flat",
	});
}

export default Component;
