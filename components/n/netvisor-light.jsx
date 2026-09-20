import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s43n5kbjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s43n5kbjv"/>`,
		"fallback": "selfhst:netvisor-light",
	});
}

export default Component;
