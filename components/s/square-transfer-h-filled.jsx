import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt-s9mb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dt-s9mb6i"/>`,
		"fallback": "reicon:square-transfer-h-filled",
	});
}

export default Component;
