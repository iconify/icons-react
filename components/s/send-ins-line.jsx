import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spqk0abml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spqk0abml"/>`,
		"fallback": "ri:send-ins-line",
	});
}

export default Component;
