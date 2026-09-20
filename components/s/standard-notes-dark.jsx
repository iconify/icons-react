import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn5osginn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn5osginn"/>`,
		"fallback": "selfhst:standard-notes-dark",
	});
}

export default Component;
