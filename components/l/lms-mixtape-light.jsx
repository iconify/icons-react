import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttgu38bpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttgu38bpq"/>`,
		"fallback": "selfhst:lms-mixtape-light",
	});
}

export default Component;
