import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db_3tsw-j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db_3tsw-j"/>`,
		"fallback": "selfhst:microsoft-teams-2016-light",
	});
}

export default Component;
