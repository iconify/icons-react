import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhw2p6cnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhw2p6cnt"/>`,
		"fallback": "thesvg-color:openstack",
	});
}

export default Component;
