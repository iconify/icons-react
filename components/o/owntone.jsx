import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuuxkorgd.css';
import '../../css/m/m61dewcpl.css';
import '../../css/w/wz4e5ub6c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuuxkorgd"/><path class="m61dewcpl"/><path class="wz4e5ub6c"/>`,
		"fallback": "selfhst:owntone",
	});
}

export default Component;
