import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq9sb-_fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq9sb-_fv"/>`,
		"fallback": "mdi:reschedule",
	});
}

export default Component;
