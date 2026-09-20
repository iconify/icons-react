import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odw3a5f3a.css';
import '../../css/l/l8u2h9byi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odw3a5f3a"/><path class="l8u2h9byi"/>`,
		"fallback": "tdesign:mobile-list-filled",
	});
}

export default Component;
