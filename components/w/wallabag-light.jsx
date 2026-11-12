import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzu_v_-nb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzu_v_-nb"/>`,
		"fallback": "selfhst:wallabag-light",
	});
}

export default Component;
