import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nln509zzz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nln509zzz"/>`,
		"fallback": "selfhst:speedtest-tracker-dark",
	});
}

export default Component;
