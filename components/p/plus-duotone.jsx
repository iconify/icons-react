import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf8cknr0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary wf8cknr0x"/>`,
		"fallback": "iconaut:plus-duotone",
	});
}

export default Component;
