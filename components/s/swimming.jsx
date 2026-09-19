import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veir1qbiz.css';
import '../../css/a/a5u582bgm.css';
import '../../css/g/gy7khnb4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veir1qbiz"/><circle class="a5u582bgm"/><path class="gy7khnb4s"/>`,
		"fallback": "cil:swimming",
	});
}

export default Component;
