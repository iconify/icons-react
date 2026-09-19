import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkn4hp0vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkn4hp0vr"/>`,
		"fallback": "grommet-icons:upload",
	});
}

export default Component;
