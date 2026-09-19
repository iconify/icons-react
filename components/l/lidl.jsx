import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg_w6jmdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg_w6jmdf"/>`,
		"fallback": "cbi:lidl",
	});
}

export default Component;
