import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eex20wb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eex20wb_f"/>`,
		"fallback": "tabler:message-bolt",
	});
}

export default Component;
