import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma4g31zac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma4g31zac"/>`,
		"fallback": "guidance:meeting-point-2",
	});
}

export default Component;
