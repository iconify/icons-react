import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7rwuvq_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7rwuvq_f"/>`,
		"fallback": "selfhst:jetkvm-dark",
	});
}

export default Component;
