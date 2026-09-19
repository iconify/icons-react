import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sxzsylbpd.css';
import '../../css/n/n9pjfq-yt.css';
import '../../css/n/nqzm4yjav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sxzsylbpd"/><path class="n9pjfq-yt"/><path class="nqzm4yjav"/></g>`,
		"fallback": "hugeicons:play-list-favourite-01",
	});
}

export default Component;
