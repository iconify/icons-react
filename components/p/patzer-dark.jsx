import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd_7uwjfj.css';
import '../../css/s/s4sa41bnz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd_7uwjfj"/><path class="s4sa41bnz"/>`,
		"fallback": "selfhst:patzer-dark",
	});
}

export default Component;
