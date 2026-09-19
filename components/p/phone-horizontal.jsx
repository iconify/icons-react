import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbc8p3xmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbc8p3xmu"/>`,
		"fallback": "grommet-icons:phone-horizontal",
	});
}

export default Component;
