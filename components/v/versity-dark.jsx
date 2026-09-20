import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjc0mib_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjc0mib_p"/>`,
		"fallback": "selfhst:versity-dark",
	});
}

export default Component;
