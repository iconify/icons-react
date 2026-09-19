import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrm_6qm5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrm_6qm5y"/>`,
		"fallback": "cbi:sana-alt",
	});
}

export default Component;
