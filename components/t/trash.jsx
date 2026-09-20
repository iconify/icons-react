import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/d/dq2v5k.css';
import '../../css/z/zo85jt.css';
import '../../css/w/wzg25p.css';
import '../../css/s/so-from-24.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c dq2v5k"/><path class="a0m25c zo85jt"/><path class="a0m25c wzg25p"/>`,
		"fallback": "line-md:trash",
	});
}

export default Component;
