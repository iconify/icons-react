import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr637ppjg.css';
import '../../css/z/zqoqynd6k.css';
import '../../css/r/rt4s7qkqf.css';
import '../../css/b/bl1tbdczb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr637ppjg"/><path class="zqoqynd6k"/><path class="rt4s7qkqf"/><path class="bl1tbdczb"/>`,
		"fallback": "token:quint",
	});
}

export default Component;
