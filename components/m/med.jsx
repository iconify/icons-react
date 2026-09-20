import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lftxn_y7p.css';
import '../../css/c/ct7mdezdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lftxn_y7p"/><path class="ct7mdezdi"/>`,
		"fallback": "token:med",
	});
}

export default Component;
