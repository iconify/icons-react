import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plq1snb4x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plq1snb4x"/>`,
		"fallback": "selfhst:internet-archive",
	});
}

export default Component;
