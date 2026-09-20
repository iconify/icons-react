import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd0jd6bes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd0jd6bes"/>`,
		"fallback": "selfhst:koito-light",
	});
}

export default Component;
