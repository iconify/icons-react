import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeae7aboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeae7aboc"/>`,
		"fallback": "cbi:petflap-closed",
	});
}

export default Component;
