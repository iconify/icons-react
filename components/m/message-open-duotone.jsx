import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnor7rbtu.css';
import '../../css/i/iim7l5brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnor7rbtu"/><path class="iim7l5brv"/>`,
		"fallback": "lets-icons:message-open-duotone",
	});
}

export default Component;
