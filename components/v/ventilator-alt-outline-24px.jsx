import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-k06jxyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-k06jxyc"/>`,
		"fallback": "healthicons:ventilator-alt-outline-24px",
	});
}

export default Component;
