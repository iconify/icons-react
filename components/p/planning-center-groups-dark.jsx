import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqwu4sf5j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqwu4sf5j"/>`,
		"fallback": "selfhst:planning-center-groups-dark",
	});
}

export default Component;
