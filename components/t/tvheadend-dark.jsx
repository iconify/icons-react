import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de1_e96at.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de1_e96at"/>`,
		"fallback": "selfhst:tvheadend-dark",
	});
}

export default Component;
