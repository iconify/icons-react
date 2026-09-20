import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkzqvsb4x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkzqvsb4x"/>`,
		"fallback": "selfhst:medikeep-dark",
	});
}

export default Component;
