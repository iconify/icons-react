import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apatysb6u.css';
import '../../css/s/sv53ehbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apatysb6u"/><path class="sv53ehbxs"/>`,
		"fallback": "token:phb",
	});
}

export default Component;
