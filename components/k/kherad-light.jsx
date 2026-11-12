import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_fvxx96a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_fvxx96a"/>`,
		"fallback": "selfhst:kherad-light",
	});
}

export default Component;
