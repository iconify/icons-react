import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfwg09oio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qfwg09oio"/>`,
		"fallback": "reicon:shield-alert-filled",
	});
}

export default Component;
