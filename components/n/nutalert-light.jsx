import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoqu0cb1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoqu0cb1f"/>`,
		"fallback": "selfhst:nutalert-light",
	});
}

export default Component;
