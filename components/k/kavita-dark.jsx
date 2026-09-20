import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw_2ctbat.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw_2ctbat"/>`,
		"fallback": "selfhst:kavita-dark",
	});
}

export default Component;
