import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsm1_jstp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsm1_jstp"/>`,
		"fallback": "keyline-icons:test-tubes-sharp",
	});
}

export default Component;
