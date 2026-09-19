import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/acx96kbqj.css';
import '../../css/v/v5fixrg-m.css';
import '../../css/s/sm1bh3rcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="acx96kbqj"/><path class="v5fixrg-m"/><path class="sm1bh3rcx"/></g>`,
		"fallback": "iconoir:pc-check",
	});
}

export default Component;
