import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0q0qobhx.css';
import '../../css/x/xoum1hbfu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0q0qobhx"/><path class="xoum1hbfu"/>`,
		"fallback": "selfhst:listenbrainz",
	});
}

export default Component;
