import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxg--r65y.css';
import '../../css/a/acs4rfber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxg--r65y"/><path class="acs4rfber"/>`,
		"fallback": "token:oxt",
	});
}

export default Component;
