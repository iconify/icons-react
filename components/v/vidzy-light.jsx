import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv9fipb_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv9fipb_s"/>`,
		"fallback": "selfhst:vidzy-light",
	});
}

export default Component;
