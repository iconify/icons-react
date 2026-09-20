import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbah3mb6z.css';
import '../../css/x/xsmw2sb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbah3mb6z"/><path class="xsmw2sb7l"/>`,
		"fallback": "tdesign:palace-2-filled",
	});
}

export default Component;
