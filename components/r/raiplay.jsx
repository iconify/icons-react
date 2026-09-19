import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfsw7b0sv.css';
import '../../css/a/alo1w6bul.css';
import '../../css/s/s2jd-4bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfsw7b0sv"/><path class="alo1w6bul"/><path class="s2jd-4bsm"/>`,
		"fallback": "cbi:raiplay",
	});
}

export default Component;
