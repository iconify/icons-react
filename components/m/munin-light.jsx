import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw82aw3si.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw82aw3si"/>`,
		"fallback": "selfhst:munin-light",
	});
}

export default Component;
