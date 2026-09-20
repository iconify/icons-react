import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plc78e1xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="plc78e1xy"/>`,
		"fallback": "reicon:pills3",
	});
}

export default Component;
