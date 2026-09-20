import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgyhf_lxq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgyhf_lxq"/>`,
		"fallback": "selfhst:timesy-light",
	});
}

export default Component;
