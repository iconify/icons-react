import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4rf0mbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4rf0mbdo"/>`,
		"fallback": "healthicons:refused-24px",
	});
}

export default Component;
