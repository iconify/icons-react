import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv5fksbba.css';
import '../../css/b/bsakxhhri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv5fksbba"/><path class="bsakxhhri"/>`,
		"fallback": "selfhst:vanilla-cookbook",
	});
}

export default Component;
