import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yseymk-7a.css';
import '../../css/l/lt60qtbco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yseymk-7a"/><path class="lt60qtbco"/>`,
		"fallback": "selfhst:mongodb-dark",
	});
}

export default Component;
