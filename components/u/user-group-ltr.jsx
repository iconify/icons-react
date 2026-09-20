import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoirqcbtc.css';
import '../../css/o/ojb5ey7sa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoirqcbtc"/><circle class="ojb5ey7sa"/>`,
		"fallback": "ooui:user-group-ltr",
	});
}

export default Component;
