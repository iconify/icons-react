import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch-5d0oph.css';
import '../../css/n/ndg-4phim.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch-5d0oph"/><path class="ndg-4phim"/>`,
		"fallback": "selfhst:reaparr-light",
	});
}

export default Component;
