import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_t1g914s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_t1g914s"/>`,
		"fallback": "selfhst:inventree-dark",
	});
}

export default Component;
