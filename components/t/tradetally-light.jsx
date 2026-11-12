import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqzv3fbdd.css';
import '../../css/u/u7c96f_0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqzv3fbdd"/><path class="u7c96f_0y"/>`,
		"fallback": "selfhst:tradetally-light",
	});
}

export default Component;
