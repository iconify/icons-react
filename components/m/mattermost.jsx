import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsjun-7mc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsjun-7mc"/>`,
		"fallback": "selfhst:mattermost",
	});
}

export default Component;
