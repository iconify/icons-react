import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsw1i4ejt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsw1i4ejt"/>`,
		"fallback": "ri:mic-line",
	});
}

export default Component;
