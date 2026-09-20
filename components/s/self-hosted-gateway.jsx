import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdgy03bmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdgy03bmi"/>`,
		"fallback": "selfhst:self-hosted-gateway",
	});
}

export default Component;
