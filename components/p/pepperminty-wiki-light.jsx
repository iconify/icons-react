import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd_s0sb-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd_s0sb-a"/>`,
		"fallback": "selfhst:pepperminty-wiki-light",
	});
}

export default Component;
