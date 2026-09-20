import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meh_qnbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meh_qnbpm"/>`,
		"fallback": "tabler:lamp-off",
	});
}

export default Component;
