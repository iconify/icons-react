import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxwc_6_yt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxwc_6_yt"/>`,
		"fallback": "selfhst:privatebin-light",
	});
}

export default Component;
